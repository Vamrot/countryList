import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'https://restcountries.eu/';
    public api = 'rest/v2/';
    public apiUrl = this.server + this.api;
}
