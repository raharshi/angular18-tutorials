import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxExamplesComponent } from './ngrx-examples.component';

describe('NgrxExamplesComponent', () => {
  let component: NgrxExamplesComponent;
  let fixture: ComponentFixture<NgrxExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
