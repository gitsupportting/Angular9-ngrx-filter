import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { has } from 'lodash';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.less']
})
export class SubNavigationComponent implements OnInit {

  constructor() { }

  @Output() collapseEvent = new EventEmitter<boolean>();

  ngOnInit() {}

  toggleCollapse(event) {
    if (has(event, 'target.checked')) {
      this.collapseEvent.emit(event.target.checked);
    }
  }

}
