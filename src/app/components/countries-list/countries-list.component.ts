import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestCountriesService } from '../../services/rest-countries.service';
import { SimpleCountry } from '../../models/simpleCountry';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  @ViewChild('searchBox') searchBox: ElementRef;

  public countryList: SimpleCountry[];
  public showedContries: SimpleCountry[];

  public showSpinner: boolean;

  constructor(
    private restCountriesService: RestCountriesService
  ) { }

  ngOnInit() {
    this.showSpinner = true;

    this.restCountriesService.getAllCountries().subscribe((data: SimpleCountry[]) => {
      this.countryList = data.map((e) => new SimpleCountry(e));

      this.showedContries = this.countryList;

      this.showSpinner = false;
    }, () => {
      alert(111111);
    });
  }

  public filterCountries(name: string) {
    this.showedContries = this.countryList.filter((country: SimpleCountry) =>
      country.name && country.name.toLocaleLowerCase().startsWith(name));
  }
}
