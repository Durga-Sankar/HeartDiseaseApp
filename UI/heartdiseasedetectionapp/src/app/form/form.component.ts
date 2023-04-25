import { Component, OnInit } from '@angular/core';
import { FormService } from './dataservice/form.service';
import { apiformat, popupMessage } from './form.constants';
import { values } from './form.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
constructor(private service:FormService, private router:Router,private route:ActivatedRoute){}
  
format:any 
output:string=''
Username:any
infomessage:any
form : any={
age:'',
trestbps:'',
chol:'',
thalach:'',
oldpeak:'',
sex:'',
cp:'',
fbs:'',
restecg:'',
exang:'',
Slope: '',
ca:'',
thal:''
}
ngOnInit(): void {
this.format=apiformat
this.infomessage=popupMessage
this.Username=this.route.snapshot.paramMap.get('User')
// this.resetvalues()
}
// resetvalues(){
// let keys= Object.keys(this.form)
// for (let i=0 ; i<keys.length ;i++){
//   this.form[keys[i]]=''
// }
// }

preprocessdata(){
  this.format['age']=this.form['age']
  this.format.trestbps=this.form['trestbps']
  this.format.chol=this.form['chol']
  this.format.thalach=this.form['thalach']
  this.format.oldpeak=this.form['oldpeak']
  this.format['sex_1']=values.sex[this.form.sex]
  
  this.format['cp_1']=values.cp[this.form.cp][1]
  this.format['cp_2']=values.cp[this.form.cp][2]
  this.format['cp_3']=values.cp[this.form.cp][3]  

  this.format['fbs_1']=values.fbs[this.form.fbs]

  this.format['restecg_1']=values.restecg[this.form.restecg][1]
  this.format['restecg_2']=values.restecg[this.form.restecg][2]
  
  this.format['exang_1']=values.exang[this.form.exang]
  this.format['Slope_1']=values.Slope[this.form.Slope][1]
  this.format['Slope_2']=values.Slope[this.form.Slope][2]

  this.format['ca_0']=values.ca[this.form.ca][0]
  this.format['ca_1']=values.ca[this.form.ca][1]
  this.format['ca_2']=values.ca[this.form.ca][2]
  this.format['ca_3']=values.ca[this.form.ca][3]

  this.format['thal_0']=values.thal[this.form.thal][0]
  this.format['thal_1']=values.thal[this.form.thal][1]
  this.format['thal_2']=values.thal[this.form.thal][2]

  console.log(this.format);
  
  
}

async onclick(){
  this.preprocessdata()
  console.log(this.form);
  const response:any= await firstValueFrom(this.service.postData(this.format))
  this.output=response['1']['output'][0];
  console.log(response);
  this.router.navigate(['/header', { User:this.Username,output:this.output}] )
 
}


logout(){
  this.router.navigate(['/login'])
}
}
