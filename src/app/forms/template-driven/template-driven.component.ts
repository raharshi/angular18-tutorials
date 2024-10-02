import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
  private readonly _currentYear = new Date().getFullYear();
  private readonly _currentMonth = new Date().getMonth();
  private readonly _currentDate= new Date().getDate();
  readonly minDate = new Date(this._currentYear - 80, 0, 1);
  readonly maxDate = new Date(this._currentYear - 8, this._currentMonth, this._currentDate);
  // model = new Actor(18, 'Tom Cruise',28, this.skills[3],"Tom@gmail.com","7799311055",new Date(1995,3,5), 'CW Productions');
  model = new Actor();
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(){
    this.model.gender="Male";
    console.log(TemplateDrivenComponent.name +" is loaded");
    console.log(`DOB :: ${this.model.dob}`);
  }
}

export class Actor{
  public id?:number;
  public name?:string;
  public skill?:string;
  public gender?:string;
  public email?:string;
  public mobile?:string;
  public dob?:Date;
  public studio?:string;
  public address?:string;

}
