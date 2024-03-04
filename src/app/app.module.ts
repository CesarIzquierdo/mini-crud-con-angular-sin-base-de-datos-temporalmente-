import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { empleadosService } from './empleados.service';
import { HomeComponetComponent } from './home-componet/home-componet.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { loginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'; 
import { loginGuardian } from './log-in/login-guardian';
import { FooterComponent } from './footer/footer.component';

 const appRoutes:Routes =[
  {path:'', component:HomeComponetComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component: QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent, canActivate:[loginGuardian]},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'login', component:LogInComponent},
  
  {path:'**',component:ErrorPersonalizadoComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponetComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent,
    LogInComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, empleadosService, DataService, loginService, CookieService, loginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
