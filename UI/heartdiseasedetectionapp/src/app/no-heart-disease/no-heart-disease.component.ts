import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { HealthTipsService } from './health-tips.service';





@Component({
  selector: 'app-no-heart-disease',
  templateUrl: './no-heart-disease.component.html',
  styleUrls: ['./no-heart-disease.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: .8 }))
      ])
    ])
  ]
})
export class NoHeartDiseaseComponent {
  @Input() output = '';

  healthTips: string[] = [];
  foodRecommendations: string[] = [];

  constructor(private healthTipsService: HealthTipsService) { }

  // ngOnInit(): void {
  //   this.healthTips.push(this.healthTipsService.getRandomTip());
  //   this.foodRecommendations.push(this.healthTipsService.getRandomRecommendation());
  // }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.healthTips.push(this.healthTipsService.getRandomTip());
      this.foodRecommendations.push(this.healthTipsService.getRandomRecommendation());
    }
  }

}
