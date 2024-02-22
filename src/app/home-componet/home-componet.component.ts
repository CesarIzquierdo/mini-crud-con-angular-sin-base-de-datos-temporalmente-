import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';


@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrls: ['./home-componet.component.css']
})
export class HomeComponetComponent implements OnInit{

  constructor(private miServicio: ServicioEmpleadosService, private empeadosService:empleadosService){
    //    this.empleados = this.empeadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empeadosService.empleados;
  }
  titulo = 'Listado de empleados';

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.empeadosService.agregarEmpleadoServicio(miEmpleado);
  }

 
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
