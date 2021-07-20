import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockAppModule } from './stock-app/stock-app.module';
import { InputTextComponent } from './common/input-text/input-text.component';

@NgModule({
  imports: [BrowserModule, FormsModule, StockAppModule],
  declarations: [AppComponent, InputTextComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
