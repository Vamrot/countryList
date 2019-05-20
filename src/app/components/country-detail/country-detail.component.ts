import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  public country: Country;
  public showSpinner = true;

  constructor(
    private route: ActivatedRoute,
    private restCountriesService: RestCountriesService,
  ) {}


  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.restCountriesService.getCountryAlpha(id)
      .subscribe((country: any) => {
        this.country = new Country(country);
        this.showSpinner = false;
      }, ()  => {
        this.showSpinner = false;
      });
  }
}
