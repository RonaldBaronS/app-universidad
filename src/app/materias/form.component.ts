import { Component, OnInit } from '@angular/core';
import {Materia} from './materia'
import {MateriaService} from './materia.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormMateriaComponent implements OnInit {

  private materia: Materia = new Materia()
  private titulo:string = "Crear Materia"

  constructor(private materiaService: MateriaService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarMateria()
  }

  cargarMateria(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.materiaService.getMateria(id).subscribe( (materia) => this.materia = materia)
      }
    })
  }

  create(): void {
    this.materiaService.create(this.materia)
      .subscribe(materia => {
        this.router.navigate(['/materias'])
        swal('Nuevo materia', `Materia ${materia.nombreMateria} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.materiaService.update(this.materia)
    .subscribe( materia => {
      this.router.navigate(['/materias'])
      swal('Materia Actualizado', `Materia ${materia.nombreMateria} actualizado con éxito!`, 'success')
    }

    )
  }

}
