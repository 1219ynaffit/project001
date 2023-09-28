import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomButtonComponent,
    CustomFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
