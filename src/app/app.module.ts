import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { RestCountriesService } from './services/rest-countries.service';
import { HttpClientModule } from '@angular/common/http';

import { Configuration } from './app.constants';
import { HeaderComponent } from './components/header/header.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    HeaderComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestCountriesService,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
