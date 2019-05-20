import { TestBed } from '@angular/core/testing';

import { RestCountriesService } from './rest-countries.service';
import { MockRestCountriesService } from './rest-countries-mock.service';

describe('RestCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // imports: [HttpModule],
      providers: [
        { provide: RestCountriesService, useClass: MockRestCountriesService }
      ]
  }));

  it('should be created', () => {
    const service: RestCountriesService = TestBed.get(RestCountriesService);
    expect(service).toBeTruthy();
  });
});
