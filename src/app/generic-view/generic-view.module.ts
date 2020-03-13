import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { HomeComponent } from './home/home.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { DiagnoseSideFilterPanelComponent } from './diagnose/side-filter-panel/side-filter-panel.component';
import { DirectiveModule } from '../directives/directives.module';

@NgModule({
  declarations: [GenericViewComponent, DiagnoseComponent, HomeComponent, DiagnoseSideFilterPanelComponent],
  imports: [
    CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
    DirectiveModule
  ]
})
export class GenericViewModule { }
