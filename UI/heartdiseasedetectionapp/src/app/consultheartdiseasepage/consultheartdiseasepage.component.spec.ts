import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultheartdiseasepageComponent } from './consultheartdiseasepage.component';

describe('ConsultheartdiseasepageComponent', () => {
  let component: ConsultheartdiseasepageComponent;
  let fixture: ComponentFixture<ConsultheartdiseasepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultheartdiseasepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultheartdiseasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
