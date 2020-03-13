import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'generic-view', pathMatch: 'full'
      },
      {
        path: 'generic-view',
        loadChildren: () => import('./generic-view/generic-view.module').then(m => m.GenericViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
