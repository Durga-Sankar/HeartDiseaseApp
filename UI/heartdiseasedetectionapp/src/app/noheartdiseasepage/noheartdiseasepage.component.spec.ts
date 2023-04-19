import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoheartdiseasepageComponent } from './noheartdiseasepage.component';

describe('NoheartdiseasepageComponent', () => {
  let component: NoheartdiseasepageComponent;
  let fixture: ComponentFixture<NoheartdiseasepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoheartdiseasepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoheartdiseasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
