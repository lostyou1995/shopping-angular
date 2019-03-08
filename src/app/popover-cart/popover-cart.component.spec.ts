import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverCartComponent } from './popover-cart.component';

describe('PopoverCartComponent', () => {
  let component: PopoverCartComponent;
  let fixture: ComponentFixture<PopoverCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
