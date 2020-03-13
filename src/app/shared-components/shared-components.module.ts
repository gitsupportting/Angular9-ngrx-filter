import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbComponent } from './breadcrumbs/breadcrumb/breadcrumb.component';
import { AppBreadcrumbComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';
import { PageDetailsPaneComponent } from './page-details-pane/page-details-pane.component';
import { AppSelectComponent } from './app-select/app-select.component';
import { ToggleComponent } from './toggle-button/toggle.component';
import { AppPercentBarComponent } from './app-percent-bar/app-percent-bar.component';
import { AppCheckboxComponent } from './app-checkbox/app-checkbox.component';
import { TopicInfoComponent } from './topic-info/topic-info.component';


@NgModule({
  declarations: [
    AppGridComponent,
    BreadcrumbComponent,
    AppBreadcrumbComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    PageDetailsPaneComponent,
    AppSelectComponent,
    ToggleComponent,
    AppPercentBarComponent,
    AppCheckboxComponent,
    TopicInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    AppGridComponent,
    BreadcrumbComponent,
    AppBreadcrumbComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    PageDetailsPaneComponent,
    AppSelectComponent,
    ToggleComponent,
    AppPercentBarComponent,
    AppCheckboxComponent,
    TopicInfoComponent
  ]
})
export class SharedComponentsModule { }
