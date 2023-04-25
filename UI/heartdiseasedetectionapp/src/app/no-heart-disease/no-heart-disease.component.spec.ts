import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHeartDiseaseComponent } from './no-heart-disease.component';

describe('NoHeartDiseaseComponent', () => {
  let component: NoHeartDiseaseComponent;
  let fixture: ComponentFixture<NoHeartDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoHeartDiseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoHeartDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
