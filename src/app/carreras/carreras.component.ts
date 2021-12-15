import { Component, OnInit } from '@angular/core';
import { Carrera } from './carrera';
import { CarreraService } from './carrera.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html'
})
export class CarrerasComponent implements OnInit {

  carreras: Carrera[];

  constructor(private carreraService: CarreraService) { }

  ngOnInit() {
    this.carreraService.getCarreras().subscribe(
      carreras => this.carreras = carreras
    );
  }

  delete(carrera: Carrera): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al carrera ${carrera.nombreCarrera} ${carrera.tiempoCarrera}?`,
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

        this.carreraService.delete(carrera.id).subscribe(
          response => {
            this.carreras = this.carreras.filter(cli => cli !== carrera)
            swal(
              'Carrera Eliminado!',
              `Carrera ${carrera.nombreCarrera} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
