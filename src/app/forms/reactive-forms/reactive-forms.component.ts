import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
  private readonly _currentYear = new Date().getFullYear();
  private readonly _currentMonth = new Date().getMonth();
  private readonly _currentDate= new Date().getDate();
  readonly minDate = new Date(this._currentYear - 80, 0, 1);
  readonly maxDate = new Date(this._currentYear - 8, this._currentMonth, this._currentDate);
  submitted:boolean = false;

  // Form Group example
  actorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    skill:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    studio:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    aliases:new FormArray([],Validators.required),
    address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required),
    }),
  });

  actorBuilderForm:any;

  constructor(private fb: FormBuilder){
    console.log(ReactiveFormsComponent.name +" is loaded");
    this.actorBuilderForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      email:[''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases:this.fb.array([this.fb.control('')])
    });
    console.log(`Form status:: ${this.actorBuilderForm.status}`);
  }



  onSubmit(){
    this.submitted =true;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
  deleteAlias(index:number){
    this.aliases.removeAt(index);
  }

  get aliases(){
    return this.actorForm.get('aliases') as FormArray;
  }
  get name(){
    return this.actorForm.get('name') as FormControl;
  }
  get email(){
    return this.actorForm.get('email') as FormControl;
  }
  get skill(){
    return this.actorForm.get('skill') as FormControl;
  }
  get mobile(){
    return this.actorForm.get('mobile') as FormControl;
  }
  get dob(){
    return this.actorForm.get('dob') as FormControl;
  }
  get studio(){
    return this.actorForm.get('studio') as FormControl;
  }
  get street(){
    return this.actorForm.get('address')?.get('street') as FormControl;
  }
}
