import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  constructor(){
    console.log(ReactiveFormsComponent.name +" is loaded");
  }
}
