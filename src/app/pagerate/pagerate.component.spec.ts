import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerateComponent } from './pagerate.component';

describe('PagerateComponent', () => {
  let component: PagerateComponent;
  let fixture: ComponentFixture<PagerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
