import { Component } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent {

  constructor(){
    console.log(HooksComponent.name+" is loaded..")
  }
  
}
