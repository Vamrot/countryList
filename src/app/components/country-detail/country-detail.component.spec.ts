import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailComponent } from './country-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RestCountriesService } from 'src/app/services/rest-countries.service';
import { MockRestCountriesService } from 'src/app/services/rest-countries-mock.service';

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'detail/:id', component: CountryDetailComponent }
        ])
      ],
      providers: [
        { provide: RestCountriesService, useClass: MockRestCountriesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
