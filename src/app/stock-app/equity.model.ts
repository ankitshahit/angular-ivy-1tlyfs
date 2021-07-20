interface IEquity {
  totalEquityCapital: number;
  totalReservesAndSurplus: number;
  faceValuePerShare: number;
  marketValuePerShare: number;
  currency?: string;
  priceIn?: PriceIn;
}

export class Equity implements IEquity {
  totalEquityCapital: number;
  totalReservesAndSurplus: number;
  faceValuePerShare: number;
  marketValuePerShare: number;
  currency?: string;
  priceIn?: PriceIn;
  constructor(equity: IEquity) {
    Object.bind(this, equity);
  }
}
export enum PriceIn {
  CRORES
}
