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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.showAlert = this.activatedRoute.snapshot.queryParams.showAlert === 'true';
    this.showAlertMethod();
  }

  public showAlertMethod(): void {
    this.messageAlert = localStorage.getItem('alertMessage') || '';
    this.showAlert = this.messageAlert !== '';
    console.log(this.showAlert);
    this.deleteAlert();
  }

  public showAlertDeleted(event: any){
    this.showAlert = event;
    this.messageAlert = 'Cancion borrada exitosamente';
    this.deleteAlert();
  }

  public deleteAlert():void {
    if(this.showAlert){
      setTimeout(() => {
        this.showAlert = false;
        localStorage.clear();
      }, 5000)
    }
  }

  

}
