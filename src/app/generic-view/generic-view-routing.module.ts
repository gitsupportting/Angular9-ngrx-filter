import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericViewComponent } from './generic-view.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: GenericViewComponent,
  data: {breadcrumb: 'Filter Quality', title: 'Filter Quality'},
  children: [
    {
      path: '',
      redirectTo: 'diagnose',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      data: {
        breadcrumb: 'Home',
        title: 'Home'
      }
    },
    {
      path: 'diagnose',
      component: DiagnoseComponent,
      data: {
        breadcrumb: 'Diagnose',
        title: 'Diagnose'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericViewRoutingModule { }
