import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Alumno } from './alumnos';


@Injectable()
export class AlumnoService {

    private urlEndPoint: string = 'http://localhost:8194/universidad/api/v1/alumnos';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) {}
    
    getAlumnos(): Observable<Alumno[]> {
        return this.http.get(this.urlEndPoint).pipe(
          map(response => response as Alumno[])
        );
    }

    create(alumno: Alumno) : Observable<Alumno> {
      console.log("Alumno.Service.create")
      return this.http.post<Alumno>(this.urlEndPoint, {headers: this.httpHeaders})
    }
  
    getAlumno(id): Observable<Alumno>{
      return this.http.get<Alumno>(`${this.urlEndPoint}/${id}`)
    }
  
    update(alumno: Alumno): Observable<Alumno>{
      return this.http.put<Alumno>(`${this.urlEndPoint}/${alumno.idAlumno}`, Alumno, {headers: this.httpHeaders})
    }
  
    delete(idAlumno: number): Observable<Alumno>{
      return this.http.delete<Alumno>(`${this.urlEndPoint}/${idAlumno}`, {headers: this.httpHeaders})
    }
    
}