import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() country!: ICountry | null;
  @Input() isDarkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ICountry {
  altSpellings: string[],
  area: number,
  borders: string[],
  capital: string[],
  capitalInfo: {
    latlng: string[]
  },
  cca2: string,
  cca3: string,
  cioc: string,
  coatOfArms: {
    png: string,
    svg: string,
  },
  continents: string[],
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    }
  },
  demonyms: {
    [key: string]: {
      f: string,
      m: string,
    }
  },
  fifa: string,
  flag: string,
  flags: {
    [key: string] : string,
  }
  gini: {
    [key: string]: number
  },
  idd: {
    root: string,
    suffixes: string[]
  },
  independent: boolean,
  landlocked: boolean,
  languages: {
    [key: string]: string
  },
  latlng: number[],
  maps: {
    [key: string]: string
  },
  name: {
    [key: string]: string | {[key: string]: {common: string, official: string}}
  },
  population: number,
  postalCode: {
    [key: string]: string
  },
  region: string,
  startOfWeek: string,
  status: string,
  subregion: string,
  timezones: string[],
  tld: string[],
  translations: {
    [key: string] : {
      common: string,
      official: string
    }
  },
  unMember: boolean
}