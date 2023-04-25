import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LoginService } from './dataservice/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerflag=false
  errorflag=false
  Logindetails={
    email:'',
    password:''
  }
  Registrationdetails={
    name:'',
    email:'',
    password:''
  }
  SignupForm !:FormGroup;
  LoginForm!:FormGroup;

  constructor(private service:LoginService , private router:Router) { }

  ngOnInit() {
    this.registerflag=false
    this.errorflag=false
    this.LoginForm = new FormGroup({
      
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    });

    this.SignupForm = new FormGroup({
      
         name:new FormControl(null,[Validators.required]),
         email:new FormControl(null,[Validators.required,Validators.email]),
         password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),

     
    });
    
    

  }

  async signin(){
    
    console.log(this.registerflag);
    console.log(this.SignupForm); 
    if(this.SignupForm.valid){
      this.registerflag=true
    console.log(this.registerflag);
    const response:any= await firstValueFrom(this.service.signinpostData(this.SignupForm.value))
      console.log(response);
      
    }
    
  }
  async login(){
    if(this.LoginForm.valid){
    const response:any= await firstValueFrom(this.service.loginpostData(this.LoginForm.value))
    console.log(response);
    if(response.success=='true'){   
      let user= response.currentuser.name 
      console.log(user);
        
      this.router.navigate(['/home',{User:user}] )
     } 
    else{
      this.errorflag=true
     } 
      
    }
  }
}
