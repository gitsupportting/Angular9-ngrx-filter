import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { has } from 'lodash';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ConstantsService } from 'src/app/services/constants.service';
import { FilterService, FilterType } from 'src/app/services/filter.service';

@Component({
  selector: 'app-page-details-pane',
  templateUrl: './page-details-pane.component.html',
  styleUrls: ['./page-details-pane.component.less']
})
export class PageDetailsPaneComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    private filterService: FilterService
  ) { }

  @Output() collapseEvent = new EventEmitter<boolean>();
  public title = '';
  public languageItems = this.constantsService.languageCodes;
  public accountTypeItems = this.constantsService.accountTypeList;
  public chatItems = this.constantsService.chatTypeList;
  public isDeeperAnalysis = false;
  private filterData: FilterType = {
    language: 'en',
    chatType: 'chat',
    accountType: 'live',
    deeperAnalysis: false
  }
  public defaultLanguageItem = {
    id: 'en',
    label: 'English'
  };

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) => this.title = event.title);
  }

  toggleCollapse(event) {
    if (has(event, 'target.checked')) {
      this.collapseEvent.emit(event.target.checked);
    }
  }

  toggleDeeperAnalysis(event) {
    this.filterData.deeperAnalysis = event;
    this.filterService.setFilterData(this.filterData);
  }

  changeLanguage(event) {
    this.filterData.language = event.id;
    this.filterService.setFilterData(this.filterData);
  }

  changeChatType(event) {
    this.filterData.chatType = event.id;
    this.filterService.setFilterData(this.filterData);
  }

  changeAccountType(event) {
    this.filterData.accountType = event.id;
    this.filterService.setFilterData(this.filterData);
  }
}
