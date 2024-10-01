import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CounterComponent, DataBindingComponent } from './data-binding/data-binding.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButton } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    DataBindingComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTabsModule,
    MatButton,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    

  ]
})
export class FormExampleModule { 
  
  constructor(){
    console.log(FormExampleModule.name+" is loaded..");
  }
  
}
