import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrls: ['./button-reset.component.css']
})
export class ButtonResetComponent {
  @Input() id: string = "";
  @Input() name: string = "";
}
