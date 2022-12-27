import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder: string = "Search for a country...";
  @Input() label: string = "search";
  @Input() isDarkMode: boolean = false;

  @Output() searched = new EventEmitter<string>();
  value!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange() {
    this.searched.emit(this.value);
  }
}
