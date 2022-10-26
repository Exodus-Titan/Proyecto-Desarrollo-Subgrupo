import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { cursoDuplicado, curso_inexistente } "from funciones curso";
import { RegistroCurso, BusquedaTituloCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, eliminarCursoComoAdmin} from "./curso requests";


@Injectable({})
export class CursoServicioAutenticacion{

    constructor(private base: BaseDeDatosService){}
   
    //Inicio de sesion del usuario (?)

    //Crear Curso
    async registroCurso(dto: RegistroCurso) {     
            //iniciar sesion para poder crear curso (?)
        try{
            const curso = await this.base.curso.create({
                data : {
                    id: dto.titulo,
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
    async buscarCurso(dto : BusquedaTituloCurso){ 
            //iniciar sesion para poder buscar curso (?)
        const curso = await this.base.curso.findUnique({where : {titulo : dto.titulo}})
        curso_inexistente(curso, 'No existe ningún curso con el título proporcionado')
        
        return curso;
    }

    //Modificar Titulo del curso
    async modificarTitulo(dto : ModificarTitulo){ 
            //iniciar sesion para poder modificar (?)
        const curso = this.base.curso.update({where : {id : (await curso).id}, data : {titulo : dto.nombre_titulo_nuevo}})

        return curso;
    }

}