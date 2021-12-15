import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Materia } from './materia';

@Injectable()
export class MateriaService {

    private urlEndPoint: string = 'http://localhost:8194/universidad/api/v1/materias';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) {}
    
    getMaterias(): Observable<Materia[]> {
        return this.http.get(this.urlEndPoint).pipe(
          map(response => response as Materia[])
        );
    }

    create(materia: Materia) : Observable<Materia> {
      return this.http.post<Materia>(this.urlEndPoint, materia, {headers: this.httpHeaders})
    }
  
    getMateria(id): Observable<Materia>{
      return this.http.get<Materia>(`${this.urlEndPoint}/${id}`)
    }
  
    update(materia: Materia): Observable<Materia>{
      return this.http.put<Materia>(`${this.urlEndPoint}/${materia.id}`, materia, {headers: this.httpHeaders})
    }
  
    delete(id: number): Observable<Materia>{
      return this.http.delete<Materia>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    }
    
}