import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'Login', component:LoginComponent},
  //{path:'Home', component:HeaderComponent},
  //{path:'AcercaDe', component:AcercaDeComponent},
  //{path:'Experiencia', component:ExperienciaComponent},
  //{path:'Educacion', component:EducacionComponent},
  //{path:'Hard&Soft', component:HysComponent},
 // {path:'Proyectos', component:ProyectosComponent},
 // {path: '', pathMatch:'full', redirectTo:'Home'},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   // RouterModule.forRoot(routes),
  ],
 // exports: [RouterModule],

})
export class AppRoutingModule { }
