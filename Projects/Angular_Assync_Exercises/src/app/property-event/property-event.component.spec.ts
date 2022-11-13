import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventComponent } from './property-event.component';

describe('PropertyEventComponent', () => {
  let component: PropertyEventComponent;
  let fixture: ComponentFixture<PropertyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
