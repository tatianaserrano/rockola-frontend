import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor(private http: HttpClient) { }

  public getCanciones(): Promise<any>{
    return this.http.get(`${environment.apiUrl}/obtenerCancio`).toPromise();
  }

  public getSongById(id: number): Promise<any>{
    return this.http.get(`${environment.apiUrl}/obtenerCancion/${id}`).toPromise();
  }

  public agregarCancion(body: any):Promise<any>{
    const url = `${environment.apiUrl}/agregarCancion`;
    const headers: HttpHeaders = new HttpHeaders({
      isadmin: 'true'
    });
    const params = {
      idcancion: 1,
      idplaylist: 1
    }
    return this.http.post(url, body, {headers, params}).toPromise();
  }
  public eliminarCancion(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarCancion/${id}`).toPromise();
  }
}
