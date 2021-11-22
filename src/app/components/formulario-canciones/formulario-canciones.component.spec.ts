import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCancionesComponent } from './formulario-canciones.component';

describe('FormularioCancionesComponent', () => {
  let component: FormularioCancionesComponent;
  let fixture: ComponentFixture<FormularioCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
