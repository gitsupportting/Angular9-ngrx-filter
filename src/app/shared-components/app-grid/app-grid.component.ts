import { Component, OnInit, Input } from '@angular/core';
import { IAppGridItem } from './iapp-grid-item';


@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.less']
})
export class AppGridComponent implements OnInit {

  _apps:IAppGridItem[] = []
  _gridColumns = 4

  constructor() {}

  ngOnInit() {}

  get apps () { return this._apps }
  @Input() set apps (apps:IAppGridItem[]) {
    this._apps = apps;
  }

  get columns () { return this._gridColumns }
  @Input() set columns (columns:number) {
    this._gridColumns = columns;
  }

}
