export class Language {
  public iso1: string;
  public iso2: string;
  public name: string;
  public nativeName: string;

  constructor(json: any) {
    if (!json) {
      return null;
    }
    this.iso1 = json.iso639_1;
    this.iso2 = json.iso639_2;
    this.name = json.name;
    this.nativeName = json.nativeName;
  }
}
