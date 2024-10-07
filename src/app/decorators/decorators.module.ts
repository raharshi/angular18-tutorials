import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHighlightDirective, CustomLowerCasePipe, DecorService, DecoratorsComponent } from './decorators.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:DecoratorsComponent}
]

@NgModule({
  declarations: [
    CustomLowerCasePipe,
    DecoratorsComponent,
    CustomHighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    DecorService,
    CustomLowerCasePipe
  ],
  exports:[RouterModule]
})
export class DecoratorsModule { 
  
  constructor(){
    console.log(DecoratorsModule.name+" is loaded..");
  }
}
