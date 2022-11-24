import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContatoComponent } from './detalhes-contato.component';

describe('DetalhesContatoComponent', () => {
  let component: DetalhesContatoComponent;
  let fixture: ComponentFixture<DetalhesContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
