import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCountriesComponent } from './ex-countries.component';

describe('ExCountriesComponent', () => {
  let component: ExCountriesComponent;
  let fixture: ComponentFixture<ExCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
