import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Output() toggled = new EventEmitter<boolean>();

  isDark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleToggle() {
    this.isDark = !this.isDark;
    this.toggled.emit(this.isDark);
  }

}
