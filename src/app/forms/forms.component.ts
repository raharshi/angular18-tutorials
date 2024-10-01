import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  encapsulation:ViewEncapsulation.Emulated
})
export class FormsComponent {

  public tabs = [
    { path: 'data-binding', name: 'Data Binding' },
    { path: 'template-driven', name: 'Template Driven' },
    { path: 'reactive-forms', name: 'Reactive Forms' },
    
  ];
  
  constructor(){
    console.log(FormsComponent.name +" is loaded");
  }
}
