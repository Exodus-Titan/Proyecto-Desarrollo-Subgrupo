import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { cursoDuplicado, curso_inexistente } "from funciones curso";
import { RegistroCurso, BusquedaCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, eliminarCursoComoAdmin} from "./requests curso";


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

    //Buscar el curso por su titulo
    async buscarCurso(dto : BusquedaCurso){  // Leer
        const curso = await this.base.curso.findUnique({where : {titulo : dto.titulo}})
        curso_inexistente(curso, 'No existe ningún curso con el título proporcionado')
        
        return curso;
    }

}