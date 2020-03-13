import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.less']
})
export class LoadingIndicatorComponent implements OnInit {

  @Input() error:boolean;
  @Input() loading:boolean;

  constructor() { }

  ngOnInit() {
  }

}
