export class ProfitAndLoss implements IProfitAndLoss {
  profitBeforeTax?: number;
  taxRate?: number;
  profitAfterTax: number;
  constructor(profitAndLoss: IProfitAndLoss) {
    Object.bind(this, profitAndLoss);
  }
}

interface IProfitAndLoss {
  profitBeforeTax?: number;
  taxRate?: number;
  profitAfterTax: number;
}
