import { Equity } from '../equity.model';
import { ProfitAndLoss } from '../profitandloss.model';

export class StockAnalysisService {
  /***
   * Gets total number of equity shares issued by a company!
   */
  getNumberOfEquityShares(equity: Equity): number {
    if (
      !equity ||
      !equity.totalEquityCapital ||
      !equity.faceValuePerShare ||
      equity.faceValuePerShare <= 0 ||
      equity.totalEquityCapital <= 0
    ) {
      return 0;
    }
    return equity.totalEquityCapital / equity.faceValuePerShare;
  }
  /**
   * Gets book value per share
   */
  getBookValuePerShare(equity: Equity) {
    const numberOfEquityShares = this.getNumberOfEquityShares(equity);
    return (
      (equity.totalEquityCapital + equity.totalReservesAndSurplus) /
      numberOfEquityShares
    );
  }
  /***
   *
   * Gets Earning price per share ratio
   */
  getEarningsPerShare(equity: Equity, profitAndLoss: ProfitAndLoss) {
    if (!equity || !profitAndLoss || !profitAndLoss.profitAfterTax) {
      throw 'Required details missing!';
    }
    const numberOfEquityShares = this.getNumberOfEquityShares(equity);
    return profitAndLoss.profitAfterTax / numberOfEquityShares;
  }

  /***
   * Gets return on equity value  in percentage
   */
  getReturnOnEquity(equity: Equity, profitAndLoss: ProfitAndLoss) {
    return (
      (profitAndLoss.profitAfterTax /
        (equity.totalEquityCapital + equity.totalReservesAndSurplus)) *
      100
    );
  }
  /***
   * Gets price-by-book value per share
   */
  getPriceByBook(equity: Equity) {
    const bookValuePerSharePrice = this.getBookValuePerShare(equity);
    return equity.marketValuePerShare / bookValuePerSharePrice;
  }
  /***
   * Gets price-by-earning ratio
   */
  getPriceByEarning(equity: Equity, profitAndLoss: ProfitAndLoss) {
    const earningsPerShare = this.getEarningsPerShare(equity, profitAndLoss);
    return equity.marketValuePerShare / earningsPerShare;
  }
}
