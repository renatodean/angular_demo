/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AlertModule } from 'shared/components/alert-component/alert.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AlertModule
  ]
})
export class HomeModule { }
