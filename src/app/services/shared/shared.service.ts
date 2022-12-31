import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isDarkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getMode$() {
    return this.isDarkMode$;
  }

  setMode(isDarkMode: boolean) {
    this.isDarkMode$.next(isDarkMode);
  }
}
