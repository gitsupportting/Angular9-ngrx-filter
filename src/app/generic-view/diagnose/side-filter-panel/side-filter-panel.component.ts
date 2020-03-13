import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-diagnose-side-filter-panel',
  templateUrl: './side-filter-panel.component.html',
  styleUrls: ['./side-filter-panel.component.less']
})
export class DiagnoseSideFilterPanelComponent implements OnInit {
  @Output() doCancel = new EventEmitter<boolean>();
  @Output() doApply = new EventEmitter<any>();
  @Input() processedData: any;

  public riskGrade: any[] = [];
  public topicList: any[] = [];
  public languageList: any[] = [];

  constructor(
    private apiService: ApiService,
    private constantsService: ConstantsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.riskGrade = constantsService.riskGrades;
    this.topicList = constantsService.topicList;
    this.languageList = constantsService.languageCodes;
  }

  ngOnInit(): void {

  }

  cancelPanel() {
    this.doCancel.emit(true);
  }

  applyFilter(data) {
    this.doApply.emit(data);
  }

  selectTopicGradeItem(topic, grade) {
    topic.value = grade.value;
  }

  selectTopics(event) {

  }

  selectLanguage(event) {

  }
}
