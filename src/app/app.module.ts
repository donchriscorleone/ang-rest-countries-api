import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SelectComponent } from './components/select/select.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterCountryPipe } from './pages/home/filter-country.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ButtonComponent,
    SearchBarComponent,
    CountryCardComponent,
    SelectComponent,
    HomeComponent,
    FilterCountryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
