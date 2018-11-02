import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputPasswordComponent } from './input-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputPasswordComponent],
  exports: [InputPasswordComponent]
})
export class InputPasswordModule { }
