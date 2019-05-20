import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

const routes: Routes = [
  { path: 'home', component: CountriesListComponent },
  { path: 'detail/:id', component: CountryDetailComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
