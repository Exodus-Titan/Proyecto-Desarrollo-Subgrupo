import { Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { Registro } from "./objetos para las requests";

@Injectable({})
export class servicioAutenticacion{

    constructor(private base: BaseDeDatosService){}

    async registro(dto: Registro) {

        const usuario = await this.base.usuario.create({
            data : {
                nombre_usuario : dto.nombre_usuario,
                email : dto.email,
                clave : dto.clave,
                nombre : dto.nombre,
                tipo : dto.tipo.toString()
            }
        })

        delete usuario.clave;

        return usuario
    };

    inicioSesion(){
        return 'Sesion iniciada'
    };
}