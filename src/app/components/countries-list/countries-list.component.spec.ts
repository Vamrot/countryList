import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CountriesListComponent } from './countries-list.component';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

import { MockRestCountriesService } from 'src/app/services/rest-countries-mock.service';


describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CountriesListComponent ],
      providers: [
        { provide: RestCountriesService, useClass: MockRestCountriesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
