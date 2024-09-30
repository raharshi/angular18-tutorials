import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachingExamplesComponent } from './caching-examples.component';

describe('CachingExamplesComponent', () => {
  let component: CachingExamplesComponent;
  let fixture: ComponentFixture<CachingExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CachingExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
