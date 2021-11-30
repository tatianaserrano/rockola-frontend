import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  public showAlert = false;
  public messageAlert = '';
  public subtituloTabla = 'Este es el subtitulo para una tabla';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.showAlert = this.activatedRoute.snapshot.queryParams.showAlert === 'true';
    console.log(this.activatedRoute.snapshot)
    this.showAlertMethod();
  }

  public showAlertMethod(): void {
    this.messageAlert = localStorage.getItem('alertMessage') || '';
    this.showAlert = this.messageAlert !== '';
    console.log(this.showAlert);
    this.deleteAlert();
  }

  public showAlertDeleted(event: any){
    this.showAlert = event.showAlert;
    this.messageAlert = event.messageAlert;
    this.deleteAlert();
  }

  public deleteAlert():void {
    if(this.showAlert){
      setTimeout(() => {
        this.showAlert = false;
        localStorage.clear();
      }, 3000)
    }
  }

  

}
