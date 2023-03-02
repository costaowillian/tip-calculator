import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAndResetAreaComponent } from './result-and-reset-area.component';

describe('ResultAndResetAreaComponent', () => {
  let component: ResultAndResetAreaComponent;
  let fixture: ComponentFixture<ResultAndResetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAndResetAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultAndResetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
