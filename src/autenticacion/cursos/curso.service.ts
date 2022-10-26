import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
//import { cursoDuplicado } from 
import { RegistroCurso, BusquedaCurso, Login, eliminarCursoComoAdmin, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso} from "./requests curso";


@Injectable({})
export class CursoServicioAutenticacion{

    constructor(private base: BaseDeDatosService){}
   
    //Crear Curso
    async registroCurso(dto: RegistroCurso) {     

        try{
            const curso = await this.base.curso.create({
                data : {
                    titulo : dto.titulo,
                    descripcion : dto.descripcion,
                    categoria : dto.categoria,
                    id_profesor : dto.id_profesor,
                    palabras_clave : dto.palabras_clave,
                    estado : dto.estado.toString()
                }
        })
                    
        return curso;

        // Verificar si el curso está duplicado
        /* catch(error){
            cursoDuplicado(error)
            throw error;
        } */

    }
}