import { Injectable, inject } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export  class empleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

  }
    empleados:Empleado[]=[
        new Empleado("Juan", "perez", "sinior", 100000),
        new Empleado("pao", "perez", "direc", 100),
        new Empleado("ana", "perez", "rh", 100),
        new Empleado("raul", "perez", "dev", 100),
        new Empleado("tomas", "perez", "dev", 100),
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n"+
        empleado.nombre +"\m"+ "salario: "+ empleado.salario)
        this.empleados.push(empleado);
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
      }

      eliminarEmpleadoServicio(indice:number){
        this.empleados.splice(indice, 1);
      }
}