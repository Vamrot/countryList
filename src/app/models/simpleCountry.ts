export class SimpleCountry{

  public name: string;
  public alpha: string;

	constructor(json: any) {
    this.name = json.name;
    this.alpha = json.alpha3Code;
  }
}
