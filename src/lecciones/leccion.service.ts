import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { RegistroLeccion } from "./request leccion/registro.leccion";


@Injectable({})
export class LeccionServicioAutenticacion{

    constructor(private base: BaseDeDatosService){}
   
    //Crear Leccion
    async registroLeccion(dto: RegistroLeccion) {     

        try{
            const leccion = await this.base.leccion.create({
                data : {
                    titulo : dto.titulo,
                    descripcion : dto.descripcion,
                    categoria : dto.categoria,
                    palabras_clave : dto.palabras_clave,
                    id_curso : dto.id_curso
                }
        })
                    
        return leccion;

        }
        // Verificar si la leccion está duplicada
        catch(error){
            // leccionDuplicado(error)
            throw error;
        } 

    }
}