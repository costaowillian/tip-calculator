import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonResetComponent } from './button-reset/button-reset.component';
import { TipAndBillAreaComponent } from './tip-and-bill-area/tip-and-bill-area.component';
import { ResultAndResetAreaComponent } from './result-and-reset-area/result-and-reset-area.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonResetComponent,
    TipAndBillAreaComponent,
    ResultAndResetAreaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
