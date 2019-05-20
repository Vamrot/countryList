import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MockRestCountriesService {

  private restUrl: string;

  constructor() {
  }

  public getAllCountries(): Observable<any> {
    return new Observable();
  }

  public getCountryAlpha(id: string): Observable<any> {
    return new Observable();
  }
}
