/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './/login-routing.module';
import { LoginComponent } from './login.component';
import { AlertModule } from 'shared/components/alert-component/alert.module';
import { InputTextModule } from 'shared/components/input-text-component/input-text.module';
import { InputPasswordModule } from 'shared/components/input-password-component/input-password.module';
import { ButtonModule } from 'shared/components/button-component/button.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AlertModule,
    InputTextModule,
    InputPasswordModule,
    ButtonModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
