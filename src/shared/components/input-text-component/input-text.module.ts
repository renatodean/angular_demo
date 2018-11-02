import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextComponent } from './input-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputTextComponent],
  exports: [InputTextComponent]
})
export class InputTextModule { }
