import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards';

const routes: Routes = [
  { path: 'login',
    loadChildren: './feature-modules/login/login.module#LoginModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'base',
    loadChildren: './feature-modules/home/home.module#HomeModule',
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
