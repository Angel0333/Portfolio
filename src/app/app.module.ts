import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
       // RouterModule.forRoot([
    //   {path:'Home', component:HeaderComponent},
    //   {path:'AcercaDe', component:AcercaDeComponent},
    //   {path:'Experiencia', component:ExperienciaComponent},
    //   {path:'Educacion', component:EducacionComponent},
    //   {path:'hard&soft', component:HysComponent},
    //   {path:'Proyectos', component:ProyectosComponent},
    //   {path: '', pathMatch:'full', redirectTo:'Home'}
    // ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
