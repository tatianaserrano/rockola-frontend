import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CancionModel } from 'src/app/models/cancion';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-tabla-canciones',
  templateUrl: './tabla-canciones.component.html',
  styleUrls: ['./tabla-canciones.component.scss']
})
export class TablaCancionesComponent implements OnInit {

  @Input() subtitulo: string = '';
  @Output() dataAlert = new EventEmitter()
  public canciones: CancionModel[] = [];
  constructor(private cancionesService: CancionesService, private router: Router) { }


  async ngOnInit(): Promise<void>{
    console.log(this.subtitulo);
    this.canciones = await this.obtenerCanciones();
    console.log(this.canciones)
  }

  private async obtenerCanciones(): Promise<any> {
    try{
      const response = await this.cancionesService.getCanciones();
      return response.data;
    }catch(error){
      this.router.navigate(['/error']);
    }
  }

  public eliminarCancion(id: number){
    this.cancionesService.eliminarCancion(id).then(async response => {
      if(response.message === 'deleted'){
        this.dataAlert.emit({showAlert: true, messageAlert: 'Canción eliminada correctamente'});
        this.canciones = await this.obtenerCanciones();
      }
    })
  }

  public irActualizarCancion(cancion: CancionModel){
    localStorage.setItem('cancionActualizar', JSON.stringify(cancion));
    this.router.navigate(['/agregar-canciones']);
  }
}
