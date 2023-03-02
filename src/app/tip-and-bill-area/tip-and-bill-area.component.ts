import { Component } from '@angular/core';


@Component({
  selector: 'app-tip-and-bill-area',
  templateUrl: './tip-and-bill-area.component.html',
  styleUrls: ['./tip-and-bill-area.component.css']
})
export class TipAndBillAreaComponent {
  tip?: Number;
  inBill?: Number;
  numberOfPersons?: Number;
  customTip!: number;
  onFocus:String = "";
  onFocuss:String = "";
  class: string = "";


  tipSelect(buttonId: any) {
    switch (buttonId){
      case "1":
        this.tip = 0.05;
        break;
      case "2":
        this.tip = 0.1;
        break;
      case "3":
        this.tip = 0.10;
        break;
      case "4":
        this.tip =  0.25;
        break;
      case "5":
        this.tip = 0.50;
        break;
      case "6":
        this.tip = this.customTip / 100;
        break;
      default:
        break;
    }
  } 
  
  billFocus() {
    this.onFocus = "chaceFocus";
  }

  billFocusOff() {
    this.onFocus = "";
  }

  changeFocuss() {
    this.onFocuss = "chaceFocus";
  }

  focussOff() {
    this.onFocuss = "";
  }
}