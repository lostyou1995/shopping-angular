import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuantityCartComponent } from './update-quantity-cart.component';

describe('UpdateQuantityCartComponent', () => {
  let component: UpdateQuantityCartComponent;
  let fixture: ComponentFixture<UpdateQuantityCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQuantityCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuantityCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
