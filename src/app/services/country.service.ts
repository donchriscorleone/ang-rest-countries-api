import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { filter, first, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { ICountry } from '../components/country-card/country-card.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api = "https://restcountries.com/v3.1/";

  private data: BehaviorSubject<ICountry[]> = new BehaviorSubject<ICountry[]>([]);
  private taken: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { 
    let storedData = window.localStorage.getItem('countries');
    try {
      let parsed = storedData ? JSON.parse(storedData) : [];
      this.data.next(parsed);
    } catch (e) {
      this.data.next([]);
    }
  }

  getAll() {
    return this.getAll$();
  }

  private getAll$() {
    return this.http.get<ICountry[]>(this.api + "all").pipe(
      map(x => {
        if (!!x && window.localStorage.getItem('countries') === null) {
          this.storeData(x);
        }
        
        return x;
      }),
      tap(x => {
        this.taken.next(true);
        this.storeData(x);
      })
    )
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
