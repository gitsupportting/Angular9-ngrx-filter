import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IOptionButton {
  label?:string;
  icon?:string;
  value:string|number;
  ariaLabel:string;
}

@Component({
  selector: 'app-option-button-group',
  templateUrl: './option-button-group.component.html',
  styleUrls: ['./option-button-group.component.less']
})
export class OptionButtonGroupComponent implements OnInit {

  groupId = '';

  @Input() label = '';
  @Input() options:IOptionButton[] = [];
  @Input() value = '';

  @Output() valueChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.groupId = Math.random().toString(36).substring(2);
  }

  onValueChanged ($event:any) {
    this.valueChange.emit($event);
  }

}
