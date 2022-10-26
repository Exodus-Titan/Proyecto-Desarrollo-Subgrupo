import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { envio } from "src/notificaciones/funciones";
import { NotificacionesService } from "src/notificaciones/notificaciones.service";
import { envioDto } from "src/notificaciones/Objetos para notificaciones";
import { esAdmin} from "src/autenticacion/funciones";
import { /*cursoDuplicado,*/ curso_inexistente } from "./funciones curso";
import { CrearCurso, BusquedaTituloCurso, BusquedaCategoriaCurso, BusquedaPalabrasClaveCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, EliminarCursoComoAdmin} from "./curso requests";
import { servicioAutenticacion } from "src/autenticacion/autenticacion.service";


@Injectable({})
export class CursoServicioAutenticacion{

    constructor(private base: BaseDeDatosService, private envio: NotificacionesService, private sesion : servicioAutenticacion){}

    claveCorreo = this.base.correo.findUnique({where:{correo : 'desarrolloucab2022@gmail.com'}})
   
    //Inicio de sesion del usuario (?)

    //Crear Curso
    async crearCurso(dto: CrearCurso) {     
            //iniciar sesion para poder crear curso (?)
        try{
            const prof = this.sesion.inicioSesion(dto)
            if ((await prof).tipo == 'profesor' && (await prof).estado == true){
                const curso = await this.base.curso.create({
                    data : {
                        titulo : dto.titulo,
                        descripcion : dto.descripcion,
                        categoria : dto.categoria,
                        id_profesor : (await prof).id,
                        palabras_clave : dto.palabras_clave,
                        estado : 'creado'
                    }
                });
                return curso;
            }else
                throw new ForbiddenException('El usuario con el que intenta iniciar sesio no es un profesor o no esta activo actualmente')
            
        
                    
        
        }
        catch (error){
            throw error;
        }
    }

    //Buscar el curso por su titulo
    async buscarCurso(dto : BusquedaTituloCurso){ 
            //iniciar sesion para poder buscar curso (?)
        
        const curso = await this.base.curso.findMany({where : {titulo : dto.titulo}})
        curso_inexistente(curso, 'No existe ningún curso con el título proporcionado')
        
        return curso;
    }

    //Buscar el curso por su categoria
    async BuscarCursoCategoria(dto : BusquedaCategoriaCurso){ 
        //iniciar sesion para poder buscar curso (?)
    const curso = await this.base.curso.findMany({where : {categoria : dto.categoria}})
    curso_inexistente(curso, 'No existe ningún curso que sea de la categoria proporcionada')
    
    return curso;
    }

    //Buscar el curso por palabras clave
    async BuscarCursoPalabrasClave(dto : BusquedaPalabrasClaveCurso){ 
        //iniciar sesion para poder buscar curso (?)
    const curso = await this.base.curso.findMany({where : {palabras_clave : dto.palabras_clave}})
    curso_inexistente(curso, 'No existe ningún curso que contenga la(s) palabra(s) clave proporcionada(s)')
    
    return curso;
    }
     /*
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

    //Modificar las palabras clave de un curso
    async ModificarPalabrasClave(dto : ModificarPalabrasClave){ 
        //iniciar sesion para poder modificar (?)
    const curso = this.base.curso.update({where : {id : (await curso).id}, data : {palabras_clave : dto.nuevas_palabras_clave}})

    return curso;
    }

    //Modificar el estado del curso
    async ModificarEstadoCurso(dto : ModificarEstadoCurso){ 
            //iniciar sesion para poder modificar (?

/*         const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, '', '')        //Enviar notificaciones a los estudiantes
        if(dto.nuevo_estado == '3'){
            datosEnvio.asunto = 'Se suspendió el curso';                                //Notificacion curso suspendido
            datosEnvio.mensaje = 'Desafortunadamente se ha suspendido el curso al que estaba subscrito'
        }else if (dto.nuevo_estado == '4'){
            datosEnvio.asunto = 'Se eliminó el curso';                                  //Notificacion curso eliminado
            datosEnvio.mensaje = 'Desafortunadamente se ha eliminado el curso al que estaba subscrito'
        } 

        curso = this.base.curso.update({where : {id : (await curso).id}, data : {estado : dto.nuevo_estado}})
        //this.envio.envioMensaje(datosEnvio, (await this.claveCorreo).clave)
        return curso;
        }

    //Eliminar Curso desde la cuenta propia (Profesor elimina su curso)
    async EliminarCursoPropio(dto : Login) {
            //iniciar sesion para poder modificar (?
        const curso_eliminado = await this.base.curso.delete({where : {id : (await curso).id}})
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Eliminación del curso', 'Su curso ha sido eliminado')
        this.envio.envioMensaje(datosEnvio, (await this.claveCorreo).clave)
        return curso;
    }

    //Eliminar Curso como Administrador
    async EliminarCursoComoAdmin(dto : EliminarCursoComoAdmin) {
            // sesion para poder modificar (?
        esAdmin(await usuario)
        //const comprobacion = 
        //curso_inexistente(await comprobacion, 'No hay ningún curso con el título que fue proporcionado')
        const curso_eliminadoadmin = await this.base.curso.delete({where : {titulo : dto.titulo_curso_eliminado}})
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Eliminación del curso', 'Su curso ha sido eliminado.    Esta accion fue realizada por el administrador ' + (await usuario).nombre_usuario)
        this.envio.envioMensaje(datosEnvio, (await this.claveCorreo).clave)
        return curso;
    }*/
    
}