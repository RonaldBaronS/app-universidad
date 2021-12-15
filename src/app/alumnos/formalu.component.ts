import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumnos';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { AlumnoService } from './alumnos.service';

@Component({
  selector: 'app-formalu',
  templateUrl: './formalu.component.html'
})
export class FormAluComponent implements OnInit {

  private alumno: Alumno = new Alumno()
  private titulo:string = "Crear Alumno"

  constructor(private alumnoService: AlumnoService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarAlumno()
  }

  cargarAlumno(): void{
    console.log("alumnos.formaalu.component.ts.cargarAlumnos()")
    this.activatedRoute.params.subscribe(params => {
      let id = params['idAlumno']
      console.log("alumnos.formaalu.component.ts.cargarAlumnos().id "+id)
      if(id){
        this.alumnoService.getAlumno(id).subscribe( (alumno) => this.alumno = alumno)
      }
    })
  }

  create(): void {
    this.alumnoService.create(this.alumno)
      .subscribe(alumno => {
        this.router.navigate(['/alumnos'])
        swal('Nuevo Alumno', `Alumno ${alumno.nombreAlumno} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.alumnoService.update(this.alumno)
    .subscribe( alumno => {
      this.router.navigate(['/alumnos'])
      swal('Alumno Actualizado', `Alumno ${alumno.nombreAlumno} actualizado con éxito!`, 'success')
    }

    )
  }

}
