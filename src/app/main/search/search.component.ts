import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService, FilterType } from 'src/app/services/filter.service';
import { Store } from '@ngrx/store';
import * as DiagnoseActions from '../../store/actions/diagnose.actions';

@Component({
  selector: 'app-main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public searchText;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly store: Store
  ) {
    this.route.queryParams.subscribe(params => {
      this.searchText = params.text;
      if (this.searchText && this.searchText !== '') {
        const data = {
          clientId: 60,
          language: 'en',
          text: this.searchText,
          contentType: 'SHORT_TEXT'
        }
        this.filterService.setSearchText(this.searchText);
        store.dispatch(DiagnoseActions.requestProcessText({data}));
        // this.apiService.processTextData(data, true);
      }
    });
  }

  ngOnInit() {
    this.filterService.subscribeFilterData().subscribe((filterData: FilterType) => {
      if (this.searchText && this.searchText !== '') {
        const data: any = {
          clientId: 60,
          language: 'en',
          text: this.searchText,
          contentType: 'SHORT_TEXT'
        };

        if (filterData.accountType !== 'live') {
          data.clientId = 61;
        }
        if (filterData.language) {
          data.language = filterData.language
        }
        this.store.dispatch(DiagnoseActions.requestProcessText({data}));
        // this.apiService.processTextData(data, true);
      }
    })
  }

  onKeyUp (event) {
    if (this.searchText.length > 0 && event.keyCode === 13) {
      const data = {
        clientId: 60,
        language: 'en',
        text: this.searchText,
        contentType: 'SHORT_TEXT'
      }

      this.filterService.setSearchText(this.searchText);
      this.store.dispatch(DiagnoseActions.requestProcessText({data}));
      // this.apiService.processTextData(data, true);
    }
  }
}
