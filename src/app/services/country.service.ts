import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, first, map, take, takeUntil, tap } from 'rxjs/operators';

import { ICountry } from '../components/country-card/country-card.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api = "https://restcountries.com/v3.1/";

  private data: Subject<ICountry[]> = new Subject();
  private taken: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { 
    let storedData = window.localStorage.getItem('countries');
    let parsed = storedData ? JSON.parse(storedData) : [];
    this.data.next(parsed);
  }

  getAll() {
    this.http.get<ICountry[]>(this.api + "all").pipe(
      takeUntil(this.taken),
      filter(x => !!x && window.localStorage.getItem('countries') === null),
      tap(x => this.taken.next(true))
    ).subscribe(res => {
      console.warn("TESTING");
      this.storeData(res);
    })
  }

  getCountries$() {
    return this.data;
  }

  getCountryByName$(countryName: string) {
    return this.http.get<ICountry[]>(this.api + "name/" + countryName).pipe(
      take(1),
      filter(countries => !!countries),
      map(countries => countries[0])
    );
  }

  private storeData(data: ICountry[]) {
    window.localStorage.setItem('countries', JSON.stringify(data));
    this.data.next(data);
  }

}