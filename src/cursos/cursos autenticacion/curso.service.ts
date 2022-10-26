import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { cursoDuplicado, curso_inexistente } "from funciones curso";
import { CrearCurso, BusquedaTituloCurso, BusquedaCategoriaCurso, BusquedaPalabrasClaveCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, eliminarCursoComoAdmin} from "./curso requests";


@Injectable({})
export class CursoServicioAutenticacion{

    constructor(private base: BaseDeDatosService){}
   
    //Inicio de sesion del usuario (?)

    //Crear Curso
    async crearCurso(dto: CrearCurso) {     
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

    //Buscar el curso por su categoria
    async BuscarCursoCategoria(dto : BusquedaCategoriaCurso){ 
        //iniciar sesion para poder buscar curso (?)
    const curso = await this.base.curso.findUnique({where : {categoria : dto.categoria}})
    curso_inexistente(curso, 'No existe ningún curso que sea de la categoria proporcionada')
    
    return curso;
    }

    //Buscar el curso por palabras clave
    async BuscarCursoPalabrasClave(dto : BusquedaPalabrasClaveCurso){ 
        //iniciar sesion para poder buscar curso (?)
    const curso = await this.base.curso.findUnique({where : {palabras_clave : dto.palabras_clave}})
    curso_inexistente(curso, 'No existe ningún curso que contenga la(s) palabra(s) clave proporcionada(s)')
    
    return curso;
    }

    //Modificar Titulo del curso
    async modificarTitulo(dto : ModificarTitulo){ 
            //iniciar sesion para poder modificar (?)
        const curso = this.base.curso.update({where : {id : (await curso).id}, data : {titulo : dto.titulo_nuevo}})

        return curso;
    }

    //Modificar descripcion del curso
    async ModificarDescripcion(dto : ModificarDescripcion){ 
        //iniciar sesion para poder modificar (?)
    const curso = this.base.curso.update({where : {id : (await curso).id}, data : {descripcion : dto.nueva_descripcion}})

    return curso;
    }   

    //Modificar categoria del curso
    async ModificarCategoria(dto : ModificarCategoria){ 
        //iniciar sesion para poder modificar (?)
    const curso = this.base.curso.update({where : {id : (await curso).id}, data : {categoria : dto.nueva_categoria}})

    return curso;
    }       

}