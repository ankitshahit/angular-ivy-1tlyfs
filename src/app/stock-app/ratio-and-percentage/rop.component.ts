import { Component, OnInit } from '@angular/core';
import { PriceIn } from '../equity.model';
import { StockAnalysisService } from './stockanalysis.service';

@Component({
  selector: 'app-stock-rop',
  templateUrl: './rop.component.html',
  styleUrls: ['./rop.component.css'],
  providers: [StockAnalysisService]
})
export class RopComponent implements OnInit {
  equityCapital;
  reservesAndSurplus;
  profitAfterTax;
  showOutput;
  totalEquityAndReserves;
  numberOfEquityShares = 0;
  figureIn = 'cr';
  name;
  faceValue;
  marketPrice;
  returnOnEquity = 0;
  priceByBook = 0;
  priceByEarnings = 0;
  earningsPerShare = 0;
  bookValuePerShare = 0;

  constructor(private accountancyService: StockAnalysisService) {}

  ngOnInit() {}

  onSubmit() {
    this.showOutput = true;
    console.log(`Inside onsubmit`);
    const equity = {
      totalEquityCapital: this.formatPriceInOption(
        this.formatAsNumber(this.equityCapital),
        PriceIn.CRORES
      ),
      totalReservesAndSurplus: this.formatPriceInOption(
        this.formatAsNumber(this.reservesAndSurplus),
        PriceIn.CRORES
      ),
      faceValuePerShare: this.formatAsNumber(this.faceValue),
      marketValuePerShare: this.formatAsNumber(this.marketPrice)
    };
    const profitAndLoss = {
      profitAfterTax: this.formatPriceInOption(
        this.formatAsNumber(this.profitAfterTax),
        PriceIn.CRORES
      )
    };

    this.returnOnEquity = this.accountancyService.getReturnOnEquity(
      equity,
      profitAndLoss
    );
    this.priceByBook = this.accountancyService.getPriceByBook(equity);
    this.earningsPerShare = this.accountancyService.getEarningsPerShare(
      equity,
      profitAndLoss
    );
    this.bookValuePerShare = this.accountancyService.getBookValuePerShare(
      equity
    );
    this.priceByEarnings = this.accountancyService.getPriceByEarning(
      equity,
      profitAndLoss
    );
    this.numberOfEquityShares = this.accountancyService.getNumberOfEquityShares(
      equity
    );
    console.log(`${JSON.stringify(equity)}`);
  }

  formatAsNumber(input) {
    let formattedNumber = !input
      ? 0
      : Number(input.replace(/,/g, '').replace(/ /g, ''));

    return formattedNumber;
  }

  formatPriceInOption(input, showPriceIn: PriceIn) {
    let formattedNumber = input;
    if (PriceIn.CRORES === showPriceIn) {
      formattedNumber = formattedNumber * 10000000;
    }
    return formattedNumber;
  }
}
