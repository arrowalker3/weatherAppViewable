import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnHomeComponent } from './return-home.component';

describe('ReturnHomeComponent', () => {
  let component: ReturnHomeComponent;
  let fixture: ComponentFixture<ReturnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
