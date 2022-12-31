import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/components/country-card/country-card.component';
import { CountryService } from 'src/app/services/country.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  isDarkMode!: boolean;
  country!: ICountry;
  languages!: string[];
  borders: ICountry[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
     private countryService: CountryService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(params => params['name']),
      switchMap(name => this.countryService.getCountryByName$(name ? name : 'philippines')),
      switchMap(c => {
        this.country = c;
        this.languages = Object.keys(this.country.languages).map(k => this.country.languages[k]);
        return this.countryService.getCountries$();
      })
    ).subscribe(countries => {
      this.country.borders?.forEach(b => {
        const border = countries.find(c => c.cca2?.includes(b) || c.cca3?.includes(b) || c.cioc?.includes(b))
        if (border) this.borders.push(border);
      })
    });

    this.sharedService.getMode$().subscribe(d => {
      this.isDarkMode = d
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateBorder(b: ICountry) {
    this.router.navigate(['/country'], {queryParams: {name: b?.name?.common}})
  }
}
