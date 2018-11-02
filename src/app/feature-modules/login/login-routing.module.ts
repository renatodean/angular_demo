import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    { path: '',  component: LoginComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [ ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
