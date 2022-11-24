import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosComponent } from './contatos.component';

describe('ContatosComponent', () => {
  let component: ContatosComponent;
  let fixture: ComponentFixture<ContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
