import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretivasComponent } from './exercicio-diretivas.component';

describe('ExercicioDiretivasComponent', () => {
  let component: ExercicioDiretivasComponent;
  let fixture: ComponentFixture<ExercicioDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDiretivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
