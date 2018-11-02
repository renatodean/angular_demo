import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'products', loadChildren: '../products/products.module#ProductsModule' }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
