/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from 'shared/services';
import { ProductDetailComponent } from './components/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
