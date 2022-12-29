import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from './components/country-card/country-card.component';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark: boolean = false;

  germany$: Observable<ICountry>;
  constructor(private countryService: CountryService) {
    this.germany$ = this.countryService.getCountryByName$('germany');
    this.germany$.subscribe(x => {
      console.warn(x);
    })
  }
}
