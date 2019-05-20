import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from '../app.constants';

@Injectable()
export class RestCountriesService {

  private restUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.restUrl = configuration.apiUrl;
  }

  public getAllCountries(): Observable<any> {
    return this.http.get<any>(this.restUrl + 'all?fields=name;alpha3Code');
  }

  public getCountryAlpha(id: string): Observable<any> {
    return this.http.get<any>(this.restUrl + 'alpha/' + id +
      '?fields=name;capital;region;subregion;population;currencies;languages;timezones;flag');
  }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
