import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
outputdata:any
show:string=''


constructor(private http :HttpClient,private route:ActivatedRoute){}
ngOnInit(): void {

  this.outputdata=this.route.snapshot.paramMap.get('output')
  console.log(typeof(this.outputdata));
  
  if (this.outputdata=='1'){
    this.show="Consult Doctor for Heart Treatment !"
  }
  else{
    this.show="No Heart Treatment Required !"
  }
}
}
