import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Empleado } from "./empleado.model";
import { loginService } from "./login.service";

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient, private loginService: loginService){}

    cargarEmpleados(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('pon tu sitio el url?auth='+token);
    }

    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.put('pon tu direccion ', empleados).subscribe(
            response => console.log("Se han guardado los empleados:", response),
            error => console.log("Error:", error)            
        );
    }

    actualizarEmpleados(indice:number, empleado:Empleado){
        let url = 'tu direccion de sitio /datos/'+indice+ '.json' ;
        
        this.httpClient.put(url, empleado).subscribe(
            response => console.log("Se ha actualizado a  empleados:", response),
            error => console.log("Error:", error)            
        );        
    }

    eliminarEmpleados(indice:number){
        let url = '/datos/'+indice+ '.json' ;
        
        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado a  empleados:", response),
            error => console.log("Error:", error)            
        );        
    }

}