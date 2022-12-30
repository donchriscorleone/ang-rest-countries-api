import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isDarkMode$: Subject<boolean> = new Subject();

  constructor() { }

  getMode$() {
    return this.isDarkMode$;
  }

  setMode(isDarkMode: boolean) {
    this.isDarkMode$.next(isDarkMode);
  }
}
