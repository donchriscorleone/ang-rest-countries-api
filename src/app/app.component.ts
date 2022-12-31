import { Component } from '@angular/core';
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
