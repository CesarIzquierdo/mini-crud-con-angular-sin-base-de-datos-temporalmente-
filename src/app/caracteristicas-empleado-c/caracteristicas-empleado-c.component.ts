import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit{
  
  @Output() CaracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService){}
  ngOnInit(){

  }
  agregaCaracteristicas(value: string){
    //this.miServicio.muestraMensaje("Característica a agregar: " + value)
    this.CaracteristicasEmpleados.emit(value);
  }
}
