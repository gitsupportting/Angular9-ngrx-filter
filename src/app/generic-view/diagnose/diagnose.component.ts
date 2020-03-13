import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService, FilterType } from 'src/app/services/filter.service';
import { Store, select } from '@ngrx/store';
import * as DiagnoseSeletor from '../../store/reducers/diagnose.reducers';
import * as DiagnoseActions from '../../store/actions/diagnose.actions';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.less']
})
export class DiagnoseComponent implements OnInit {
  public processedData: any;
  public allowPublicChat = false;
  public allowPrivateChat = false;
  public searchText = '';
  public isFilterPanel = false;
  public isDeeperAnalysis = false;
  public isLoaded = false;
  public policyGuides: any[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FilterService,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.filterService.subscribeFilterData().subscribe((filterData: FilterType) => {
      this.isDeeperAnalysis = filterData.deeperAnalysis;
    });

    this.store.pipe(select(DiagnoseSeletor._getProcessedData)).subscribe(processedData => {
      if (Object.keys(processedData).length > 0) {
        this.processedData = JSON.parse(JSON.stringify(processedData));
        this.isLoaded = true;
        this.searchText = this.filterService.getSearchText();
        if (this.searchText !== '')
          this.router.navigate(['/generic-view/diagnose'], { queryParams: { text: this.searchText } });

        this.store.dispatch(DiagnoseActions.requestGetPolicyGuides());
      }
    });

    this.store.pipe(select(DiagnoseSeletor._getPolicyGuides)).subscribe(policyGuides => {
      this.policyGuides = policyGuides;
    });
  }

  showFilterPanel(): void {
    this.isFilterPanel = true;
  }

  cancelFilterPanel(event): void {
    this.isFilterPanel = false;
  }

  applyFilter(event): void {

  }

  checkPolicyGroupCriteria(policy): boolean {
    const criterias = policy.criteria;

    if (this.processedData.topics.length > 0) {
      for (const x of this.processedData.topics) {
        for (const y of criterias) {
          if (Number(x.id) === Number(y.topic) && Number(x.value) >= Number(y.grade)) {
            return false;
          }
        }
      }
    }

    return true;
  }
}
