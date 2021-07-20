import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowDigitsPipe } from './show-digits.pipe';
import { RopComponent } from './ratio-and-percentage/rop.component';
import { SeeallStocksComponent } from './list-stocks/seeall-stocks.component';
import { AddStockComponent } from './add-stock/add-stock.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RopComponent, ShowDigitsPipe, SeeallStocksComponent, AddStockComponent],
  exports: [RopComponent, SeeallStocksComponent]
})
export class StockAppModule {}
