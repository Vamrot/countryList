export class Currency {
  public code: string;
  public name: string;
  public symbol: string;

  constructor(json: any) {
    if (!json) {
      return null;
    }
    this.code = json.code;
    this.name = json.name;
    this.symbol = json.symbol;
  }
}
