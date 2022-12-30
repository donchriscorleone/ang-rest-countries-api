import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ICountry } from 'src/app/components/country-card/country-card.component';
import { ISelectOption } from 'src/app/components/select/select.component';
import { CountryService } from 'src/app/services/country.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkMode: boolean = false;
  options: ISelectOption<string>[] = [];
  countries: ICountry[] = [];
  region: string = '';
  countryName: string = '';

constructor(private sharedService: SharedService, private countryService: CountryService,) { }

  ngOnInit(): void {
    this.sharedService.getMode$().subscribe(x => this.isDarkMode = x);
    this.options = [
      {name: 'Filter by Region', value: ''},
      {name: 'Africa', value: 'africa'},
      {name: 'America', value: 'america'},
      {name: 'Asia', value: 'asia'},
      {name: 'Europe', value: 'europe'},
      {name: 'Oceania', value: 'oceania'},
    ];
    this.countryService.getAll().subscribe(c => {
      this.countries = c;
    })
  }

  onOptionSelect(selected: string) {
    this.region = selected;
  }

  onSearched(value: string) {
    this.countryName = value;
  }

}
