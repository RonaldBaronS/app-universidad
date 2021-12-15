import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Carrera } from './carrera';

@Injectable()
export class CarreraService {

    private urlEndPoint: string = 'http://localhost:8194/universidad/api/v1/carreras';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) {}
    
    getCarreras(): Observable<Carrera[]> {
        return this.http.get(this.urlEndPoint).pipe(
          map(response => response as Carrera[])
        );
    }

    create(carrera: Carrera) : Observable<Carrera> {
      return this.http.post<Carrera>(this.urlEndPoint, carrera, {headers: this.httpHeaders})
    }
  
    getCarrera(id): Observable<Carrera>{
      return this.http.get<Carrera>(`${this.urlEndPoint}/${id}`)
    }
  
    update(carrera: Carrera): Observable<Carrera>{
      return this.http.put<Carrera>(`${this.urlEndPoint}/${carrera.id}`, carrera, {headers: this.httpHeaders})
    }
  
    delete(id: number): Observable<Carrera>{
      return this.http.delete<Carrera>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    }


}