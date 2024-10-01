import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DecoratorsModule { 
  
  constructor(){
    console.log(DecoratorsModule.name+" is loaded..");
  }
}
