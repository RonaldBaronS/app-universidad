import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CarrerasComponent } from './carreras/carreras.component';
import { CarreraService } from './carreras/carrera.service';
import { FormComponent } from './carreras/form.component';
import { FormAluComponent } from './alumnos/formalu.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoService } from './alumnos/alumnos.service';
import { MateriasComponent } from './materias/materias.component';
import { FormMateriaComponent } from './materias/form.component';
import { MateriaService } from './materias/materia.service';



const routes: Routes = [
  {path: '', redirectTo: '/carreras', pathMatch: 'full'},
  //{path: 'directivas', component: DirectivaComponent},
  {path: 'carreras', component: CarrerasComponent},
  {path: 'carreras/form', component: FormComponent},
  {path: 'carreras/form/:id', component: FormComponent},

  {path: '', redirectTo: '/alumnos', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'alumnos/formalu', component: FormAluComponent},
  {path: 'alumnos/formalu/:id', component: FormAluComponent},

  {path: '', redirectTo: '/materias', pathMatch: 'full'},
  {path: 'materias', component: MateriasComponent},
  {path: 'materias/form', component: FormMateriaComponent},
  {path: 'materias/form/:id', component: FormMateriaComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //DirectivaComponent,
    CarrerasComponent,
    AlumnosComponent,
    MateriasComponent,
    FormAluComponent,
    FormMateriaComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarreraService, AlumnoService, MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
