import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioProdutosComponent } from './exercicio-produtos.component';

describe('ExercicioProdutosComponent', () => {
  let component: ExercicioProdutosComponent;
  let fixture: ComponentFixture<ExercicioProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
