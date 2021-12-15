import { Component, OnInit } from '@angular/core';
import { Materia } from './materia';
import { MateriaService } from './materia.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html'
})
export class MateriasComponent implements OnInit {

  materias: Materia[];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materiaService.getMaterias().subscribe(
      materias => this.materias = materias
    );
  }

  delete(materia: Materia): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al materia ${materia.nombreMateria} ${materia.creditoMateria}?`,
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

        this.materiaService.delete(materia.id).subscribe(
          response => {
            this.materias = this.materias.filter(cli => cli !== materia)
            swal(
              'Curso Eliminado!',
              `Curso ${materia.nombreMateria} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
