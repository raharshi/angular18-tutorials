import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {

  topics=[
    "One-way binding",
		"Interpolation",
		"Property binding",
		"Event binding",
		"Two-way binding",
		"NgModel",
		"Custom -input, output directives"
  ];

  name: any;
  initialCount:number = 18;
  selectedTopic:string  = this.topics[0];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  clickMsg() {
    window.alert("Button click:: Event binding tested!!");
  }
  
  intString:string = "interpolation example";
  btnDisable: boolean=false;
  imageUrl:string="https://houseofangular.io/wp-content/uploads/2023/11/AngularLogoGradient.png";
  keyPressMsg:string = "No key pressed yet";
  
  keyPressed(event: KeyboardEvent) {
    console.log(`key pressed :: ${event.key}`);
    this.keyPressMsg = `key pressed :: ${event.key}`;
  }


  constructor(){
    console.log(DataBindingComponent.name +" is loaded");
    this.btnDisable = true;
  }
}

@Component({
  selector:'app-counter',
  template:`
    <button mat-button (click)="updateCount(-1)">-</button>
    <span>{{ count }}</span>
    <button mat-button (click)="updateCount(+1)">+</button>
  `,
})
export class CounterComponent{
  @Input() count: number= 0;
  @Output() countChange = new EventEmitter();

  updateCount(num:number){
    this.count+=num;
    this.countChange.emit(this.count);
  }
}