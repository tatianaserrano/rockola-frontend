import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionesService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-tabla-canciones',
  templateUrl: './tabla-canciones.component.html',
  styleUrls: ['./tabla-canciones.component.scss']
})
export class TablaCancionesComponent implements OnInit {

  public canciones: any[] = [];
  constructor(private cancionesService: CancionesService, private router: Router) { }


  async ngOnInit(): Promise<void>{
    this.canciones = await this.obtenerCanciones();
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
        this.canciones = await this.obtenerCanciones();
      }
    })
  }

  

}
