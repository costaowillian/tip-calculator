import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-and-reset-area',
  templateUrl: './result-and-reset-area.component.html',
  styleUrls: ['./result-and-reset-area.component.css']
})
export class ResultAndResetAreaComponent {
  @Input() tipAmount: string = "0,00";
  @Input() total: string = "0,00";

  @Input() tip?: Number;
  @Input() inBill?: Number;
  @Input() numberOfPersons?: Number;

  Result(tip: any, inBill: any, numberOfPersons: any) {
    if((tip == null) && (inBill == null) && (numberOfPersons == null)){
      this.tipAmount = "$ 0,00";
      this.total = "$ 0,00";
    } else if ((tip != 0) && (inBill != 0) && (numberOfPersons != 0)) {
      const tipAmountPersons = (inBill * tip) / numberOfPersons;
      const totalPersons = ((inBill * tip) + inBill) / numberOfPersons;
      
      this.tipAmount = `${tipAmountPersons}`;
      this.total = `${totalPersons}`;
    }
  }

  reset() {
    window.location.reload();
  }
}
