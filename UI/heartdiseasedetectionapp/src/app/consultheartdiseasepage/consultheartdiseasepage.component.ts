import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consultheartdiseasepage',
  templateUrl: './consultheartdiseasepage.component.html',
  styleUrls: ['./consultheartdiseasepage.component.css']
})
export class ConsultheartdiseasepageComponent {
  @Input() output: string ='';

}
