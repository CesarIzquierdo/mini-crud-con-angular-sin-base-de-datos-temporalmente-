import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit{
  constructor(private router:Router,private route:ActivatedRoute, private miServicio: ServicioEmpleadosService, private empeadosService:empleadosService){}

  ngOnInit(): void {
    this.empleados = this.empeadosService.empleados;
    this.indice=parseInt(this.route.snapshot.params['id']);
    let empleado:Empleado=this.empeadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
    this.accion=this.route.snapshot.queryParams['accion'];
  }
  titulo ="Actualiza";
  empleados:Empleado[]=[];
  
  accion :number=0;
  volverHome(){
    this.router.navigate(['']);
  }

  /*actualizarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.empeadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
    this.router.navigate(['']);

  }

  eliminarEmpleado(){
    this.empeadosService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate(['']);
  }*/

  actualizarEmpleado(){
    if(this.accion == 1){
      let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      // this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
      this.empeadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
      this.router.navigate(['']);
    }else{
      this.empeadosService.eliminarEmpleadoServicio(this.indice);
      this.router.navigate(['']);
    }
  }
 
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number=0;
}
