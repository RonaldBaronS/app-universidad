import { Component, OnInit } from '@angular/core';


import swal from 'sweetalert2'
import { Alumno } from './alumnos';
import { AlumnoService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html'
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[];

  constructor(private alumnoservice: AlumnoService) { }

  ngOnInit() {
    this.alumnoservice.getAlumnos().subscribe(
      alumnos => this.alumnos = alumnos
    );
  }

  delete(alumno: Alumno): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al alumno ${alumno.nombreAlumno} ${alumno.apellidoAlumno}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.alumnoservice.delete(alumno.idAlumno).subscribe(
          response => {
            this.alumnos = this.alumnos.filter(cli => cli !== alumno)
            swal(
              'Alumno Eliminado!',
              `Alumno ${alumno.nombreAlumno} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
