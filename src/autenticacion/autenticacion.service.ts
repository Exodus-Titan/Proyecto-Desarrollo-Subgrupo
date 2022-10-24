import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { usuarioDuplicado } from "./funciones";
import { Login, Registro } from "./objetos para las requests";

@Injectable({})
export class servicioAutenticacion{

    constructor(private base: BaseDeDatosService){}

    async registro(dto: Registro) {

        try{
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
        }
        catch(error){
            usuarioDuplicado(error)
            throw error;
        }
    };

    async inicioSesion(dto : Login){
        const usuario = await this.base.usuario.findUnique({where: {email : dto.email}})
        if (!usuario) 
            throw new ForbiddenException('No hay ninguna cuenta con el correo proporcionado asingado')
    
        if (usuario.clave == dto.clave) {
            delete usuario.clave;
            return usuario
        }else
            throw new ForbiddenException('Clave incorrecta')
    };
}