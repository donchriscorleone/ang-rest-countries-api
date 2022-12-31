import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() hasIcon: boolean | null = false;
  @Input() label: any = '';
  @Input() isDarkMode: boolean = false;
  @Output() clicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clicked.emit();
  }
}
