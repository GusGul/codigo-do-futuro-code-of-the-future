import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioHttpApiComponent } from './exercicio-http-api.component';

describe('ExercicioHttpApiComponent', () => {
  let component: ExercicioHttpApiComponent;
  let fixture: ComponentFixture<ExercicioHttpApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioHttpApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioHttpApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
