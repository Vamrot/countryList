import { Currency } from './currency';
import { Language } from './language';

export class Country {

  // name;capital;region;subregion;population;currencies;languages;timezones;flag
  public name: string;
  public capital: string;
  public region: string;
  public subregion: string;
  public population: string;
  public currencies: Currency[];
  public languages: Language[];
  public timezones: string[];
  public flag: string;

  constructor(json: any) {
    if (!json) {
      return null;
    }
    this.name = json.name;
    this.capital = json.capital;
    this.region = json.region;
    this.subregion = json.subregion;
    this.population = json.population;
    this.currencies = json.currencies.map(cur => new Currency(cur));
    this.languages = json.languages.map(languages => new Currency(languages));
    this.timezones = json.timezones;
    this.flag = json.flag;
  }
}
