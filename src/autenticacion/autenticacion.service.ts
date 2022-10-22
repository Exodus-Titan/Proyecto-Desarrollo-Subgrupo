import { Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";

@Injectable({})
export class servicioAutenticacion{

    constructor(private base: BaseDeDatosService){}

    registro() {
        return 'Registro completado'
    };

    inicioSesion(){
        return 'Sesion iniciada'
    };
}