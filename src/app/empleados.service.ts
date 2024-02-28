import { Injectable, inject } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataService } from "./data.service";

@Injectable()
export  class empleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataService){}

  setEmpleados(misEempleados:Empleado[]){
    this.empleados=misEempleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }
  empleados:Empleado[]=[];
    /*empleados:Empleado[]=[
        new Empleado("Juan", "perez", "sinior", 100000),
        new Empleado("pao", "perez", "direc", 100),
        new Empleado("ana", "perez", "rh", 100),
        new Empleado("raul", "perez", "dev", 100),
        new Empleado("tomas", "perez", "dev", 100),
    
      ];*/

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n"+
        empleado.nombre +"\n"+ "salario: "+ empleado.salario)
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }

      actualizarEmpleadoServicio(indice:number, empleado:Empleado){
        let empleadoModificado=this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleados(indice, empleado);

      }

      eliminarEmpleadoServicio(indice:number){
        this.empleados.splice(indice, 1);
        this.dataService.eliminarEmpleados(indice);
        if(this.empleados!=null){
          this.dataService.guardarEmpleados(this.empleados);
        }
      }
}