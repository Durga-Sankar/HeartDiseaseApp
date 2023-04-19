import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-noheartdiseasepage',
  templateUrl: './noheartdiseasepage.component.html',
  styleUrls: ['./noheartdiseasepage.component.css']
})
export class NoheartdiseasepageComponent {
  @Input() output: string ='';
  
}
