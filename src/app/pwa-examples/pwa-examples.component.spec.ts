import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaExamplesComponent } from './pwa-examples.component';

describe('PwaExamplesComponent', () => {
  let component: PwaExamplesComponent;
  let fixture: ComponentFixture<PwaExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwaExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwaExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
