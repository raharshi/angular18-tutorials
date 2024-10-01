import { Component } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss'
})
export class DecoratorsComponent {

  constructor(){
    console.log(DecoratorsComponent.name+" is loaded..")
  }
  
}
