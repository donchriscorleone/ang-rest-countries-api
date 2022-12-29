import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from './components/country-card/country-card.component';
import { ISelectOption } from './components/select/select.component';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark: boolean = false;

  germany$: Observable<ICountry>;
  options: ISelectOption<string>[] = [];

  constructor(private countryService: CountryService) {
    this.germany$ = this.countryService.getCountryByName$('germany');
    this.germany$.subscribe(x => {
      console.warn(x);
    })

    this.options = [
      {name: 'Filter by Region', value: ''},
      {name: 'Africa', value: 'africa'},
      {name: 'America', value: 'america'},
      {name: 'Asia', value: 'asia'},
      {name: 'Europe', value: 'europe'},
      {name: 'Oceania', value: 'oceania'},
    ]
  }

  onOptionSelect(value: ISelectOption<string>) {
    console.warn(value)
  }
}
