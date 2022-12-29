import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() name: string = 'select';
  @Input() isDarkMode: boolean = false;
  @Input() options: ISelectOption<string>[] = [];

  @Output() onOptionSelect: EventEmitter<any> = new EventEmitter();

  value: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleOnChange(event: Event) {
    const value = (event?.target as any).value;
    this.value = value;
    this.onOptionSelect.emit(value);
  }
}

export interface ISelectOption<T> {
  name: string,
  value: T
}