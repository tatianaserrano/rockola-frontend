import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CancionModel } from 'src/app/models/cancion';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-formulario-canciones',
  templateUrl: './formulario-canciones.component.html',
  styleUrls: ['./formulario-canciones.component.scss']
})
export class FormularioCancionesComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public cancionActualizar: CancionModel | null = null;

  constructor(private formBuilder: FormBuilder, 
    private cancionesService: CancionesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerCancionActualizar();
    this.buidlForm();
  }

  public agregarCancion() {
    const cancion: CancionModel = this.formGroup.value;
    this.cancionesService.agregarCancion(cancion).then(response => {
      console.log(response);
      localStorage.setItem('alertMessage', 'Canción creada correctamente');
      this.router.navigate(['/canciones'], { queryParams: {showAlert: 'agregar'} });
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public obtenerCancionActualizar(){
    const actualizar = localStorage.getItem('cancionActualizar');
    this.cancionActualizar = actualizar ? JSON.parse(actualizar) : null;
  }

  public buidlForm(){
    this.formGroup = this.formBuilder.group({
      nombre: [this.cancionActualizar?.nombre, [Validators.required]],
      genero: [this.cancionActualizar?.genero, Validators.required],
      artista: [this.cancionActualizar?.artista, Validators.required],
    });
  }

  public actualizarCancion(){
    const cancion: CancionModel = {idcancion: this.cancionActualizar?.idcancion, ...this.formGroup.value}
    this.cancionesService.actualizarCancion(cancion).then(response => {
      console.log(response);
      if(response.message === 'updated'){
        localStorage.setItem('alertMessage', 'Canción actualizada correctamente');
        this.router.navigate(['/canciones'], { queryParams: {showAlert: 'actualizar'}});
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }
}
