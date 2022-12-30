import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from './components/country-card/country-card.component';
import { ISelectOption } from './components/select/select.component';
import { CountryService } from './services/country.service';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.getMode$().subscribe(x => this.isDark = x);
  }

  handleToggle(value: boolean) {
    this.sharedService.setMode(value);
  }
}
