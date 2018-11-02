import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './components/product-detail.component';

const loginRoutes: Routes = [
    {
      path: '',
      component: ProductsComponent,
      children: [
        {
          path: 'detail',
          component: ProductDetailComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [ ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
