import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ShellComponent } from './shell/shell.component';
import { MhsFormComponent } from './mhs-form/mhs-form.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    // canActivateChild: [LoginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/main'
      },
      {
        path: 'main',
        component: FirstComponentComponent
      },
      {
        path: 'mhs/:id',
        component: MhsFormComponent
      },
      {
        path: 'mhs',
        component: MhsFormComponent
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
