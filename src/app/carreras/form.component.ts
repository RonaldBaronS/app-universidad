import { Component, OnInit } from '@angular/core';
import {Carrera} from './carrera'
import {CarreraService} from './carrera.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private carrera: Carrera = new Carrera()
  private titulo:string = "Crear Carrera"

  constructor(private carreraService: CarreraService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCarrera()
  }

  cargarCarrera(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.carreraService.getCarrera(id).subscribe( (carrera) => this.carrera = carrera)
      }
    })
  }

  create(): void {
    this.carreraService.create(this.carrera)
      .subscribe(carrera => {
        this.router.navigate(['/carreras'])
        swal('Nuevo carrera', `Carrera ${carrera.nombreCarrera} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.carreraService.update(this.carrera)
    .subscribe( carrera => {
      this.router.navigate(['/carreras'])
      swal('Carrera Actualizado', `Carrera ${carrera.nombreCarrera} actualizado con éxito!`, 'success')
    }

    )
  }

}
