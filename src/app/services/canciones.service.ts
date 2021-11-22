import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CancionModel } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor(private http: HttpClient) { }

  public getCanciones(): Promise<any>{
    return this.http.get(`${environment.apiUrl}/obtenerCanciones`).toPromise();
  }

  public obtenerCancionPorId(id: number): Promise<any>{
    return this.http.get(`${environment.apiUrl}/obtenerCancion/${id}`).toPromise();
  }

  public agregarCancion(cancion: CancionModel):Promise<any>{
    const url = `${environment.apiUrl}/agregarCancion`;
    const headers: HttpHeaders = new HttpHeaders({
      isadmin: 'true'
    });
    const params = {
      idcancion: 1,
      idplaylist: 1
    }
    return this.http.post(url, cancion, {headers, params}).toPromise();
  }

  public actualizarCancion(cancion: CancionModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarCancion/${cancion.idcancion}`;
    return this.http.put(url, cancion).toPromise();
  }
  public eliminarCancion(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarCancion/${id}`).toPromise();
  }
}
