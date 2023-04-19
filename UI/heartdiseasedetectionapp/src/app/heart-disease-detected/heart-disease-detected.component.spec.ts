import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartDiseaseDetectedComponent } from './heart-disease-detected.component';

describe('HeartDiseaseDetectedComponent', () => {
  let component: HeartDiseaseDetectedComponent;
  let fixture: ComponentFixture<HeartDiseaseDetectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartDiseaseDetectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartDiseaseDetectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
