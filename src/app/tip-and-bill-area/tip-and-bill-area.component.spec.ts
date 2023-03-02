import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipAndBillAreaComponent } from './tip-and-bill-area.component';

describe('TipAndBillAreaComponent', () => {
  let component: TipAndBillAreaComponent;
  let fixture: ComponentFixture<TipAndBillAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipAndBillAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipAndBillAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
