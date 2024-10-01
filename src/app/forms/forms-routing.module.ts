import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  { path: '', component: FormsComponent,
      children:[
        {path:'',redirectTo:'data-binding',pathMatch:'full'},
        { path: 'template-driven', component: TemplateDrivenComponent },
        { path: 'reactive-forms', component: ReactiveFormsComponent },
        { path: 'data-binding', component: DataBindingComponent },
      ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
