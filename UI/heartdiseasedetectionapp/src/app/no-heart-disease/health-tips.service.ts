import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthTipsService {
  private healthTips: string[] = [
    'Eat more plant-based foods 🥦',
    'Limit saturated and trans fats 🚫',
    'Increase healthy fat intake 🥑',
    'Reduce added sugars and processed foods 🍭',
    'Exercise regularly 🏃‍♂️',
    'Manage stress levels 😌',
    'Quit smoking 🚭',
    'Get enough sleep 😴',
    'Monitor blood pressure and cholesterol levels 🩺',
    'Stay hydrated 💦',
    'Maintain a healthy weight 🏋️‍♀️',
    'Limit alcohol consumption 🍺',
    'Include whole grains in your diet 🌾',
    'Eat more potassium-rich foods 🍌',
    'Incorporate more physical activity into your day 🚶‍♀️',
    'Take breaks to move around and stretch 🧘‍♀️',
    'Eat heart-healthy foods ❤️',
    'Manage underlying health conditions 🩹',
    'Incorporate meditation or relaxation techniques 🧘‍♂️',
    'Work with a healthcare professional to develop a heart-healthy meal plan 🩺'
    ];
  

  private foodRecommendations: string[] = [
    '🍎 Eat more fruits and vegetables',
    '🍞 Choose whole-grain breads and cereals',
    '🐟 Eat fish twice a week',
    '🚫 Limit saturated and trans fats',
    '🍗 Choose lean meats and poultry',
    '🥜 Eat nuts, seeds, and legumes',
    '🥛 Use low-fat dairy products',
    '🚫 Limit sugar and sweetened beverages',
    '🚫 Avoid processed foods',
    '🍴 Eat a variety of foods',
    '🌱 Choose plant-based protein sources',
    '🌾 Incorporate more fiber-rich foods',
    '🥑 Choose healthy fats like olive oil and avocado',
    '🥩 Limit red meat consumption',
    '🍟 Avoid deep-fried foods',
    '🧂 Choose low-sodium options',
    '🍷 Limit alcohol consumption',
    '🍭 Avoid sugary snacks and desserts',
    '🌿 Choose organic and non-GMO foods when possible',
    '🔎 Read food labels and ingredient lists carefully'
  ];
  
  

  constructor() { }

  getRandomTip(): string {
    const randomIndex = Math.floor(Math.random() * this.healthTips.length);
    return this.healthTips[randomIndex];
  }
  getRandomRecommendation(): string {
    const randomIndex = Math.floor(Math.random() * this.foodRecommendations.length);
    return this.foodRecommendations[randomIndex];
  }

}
