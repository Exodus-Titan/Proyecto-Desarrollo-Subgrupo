import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { envio } from "src/notificaciones/funciones";
import { NotificacionesService } from "src/notificaciones/notificaciones.service";
import { envioDto } from "src/notificaciones/Objetos para notificaciones";
import { comprobarProfActivo, construitEnvio, cursos_inexistentes, curso_inexistente, login_y_check, obtenerMensajes } from "./funciones curso";
import { CrearCurso, BusquedaTituloCurso, BusquedaCategoriaCurso, BusquedaPalabrasClaveCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, EliminarCursoComoAdmin, modificar} from "./curso requests";
import { servicioAutenticacion } from "src/autenticacion/autenticacion.service";
import { SuscripcionService } from "src/suscripcion/suscripcion.service";
import { suscripcion } from "src/suscripcion/objetos para suscripcion/suscripcion";


@Injectable({})
export class CursoServicioAutenticacion{

    constructor(private base: BaseDeDatosService, private envio: NotificacionesService, private sesion : servicioAutenticacion, private suscripcion : SuscripcionService){}

    claveCorreo = this.base.correo.findUnique({where:{correo : 'desarrolloucab2022@gmail.com'}})
   
    //Inicio de sesion del usuario (?)

    //Crear Curso
    async crearCurso(dto: CrearCurso) {     
        try{
            const prof = this.sesion.inicioSesion(dto)
            if (comprobarProfActivo( await (prof))){
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
                this.suscripcion.suscribir(new suscripcion(dto.email, dto.clave, curso.id.toString()))
                return curso;
            }else
                throw new ForbiddenException('El usuario con el que intenta iniciar sesio no es un profesor/administrador o no esta activo actualmente')
        }
        catch (error){
            throw error;
        }
    }

    //Buscar el curso por su titulo
    async buscarCurso(dto : BusquedaTituloCurso){ 
        const cursos = await this.base.curso.findMany({where : {titulo : dto.titulo}})
        cursos_inexistentes(cursos, 'No existe ningún curso con el título proporcionado')
        return cursos;
    }

    //Buscar el curso por su categoria
    async BuscarCursoCategoria(dto : BusquedaCategoriaCurso){ 
        const cursos = await this.base.curso.findMany({where : {categoria : dto.categoria}})
        cursos_inexistentes(cursos, 'No existe ningún curso que sea de la categoria proporcionada')
        return cursos;
    }

    //Buscar el curso por palabras clave
    async BuscarCursoPalabrasClave(dto : BusquedaPalabrasClaveCurso){ 
        const cursos = await this.base.curso.findMany({where : {palabras_clave : dto.palabras_clave}})
        cursos_inexistentes(cursos, 'No existe ningún curso que contenga la(s) palabra(s) clave proporcionada(s)')
        
        return cursos;
    }
     
    //Modificar Titulo del curso
    async modificarTitulo(dto : ModificarTitulo){ 
        const prof = this.sesion.inicioSesion(dto)
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)} })
        curso_inexistente(await curso, 'EL curso proporcionado no existe')
        if (await login_y_check(await prof, dto, await curso) == true){
            curso = this.base.curso.update({where : {id : Number(dto.id)}, data : {titulo : dto.titulo}})
            return curso;
        }
        else
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')    
    }
    
    
    
    //Modificar descripcion del curso
    async ModificarDescripcion(dto : ModificarDescripcion){ 
        const prof = this.sesion.inicioSesion(dto)
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)} })
        curso_inexistente(await curso, 'EL curso proporcionado no existe')
        if (await login_y_check(await prof, dto, await curso) == true){
            curso = this.base.curso.update({where : {id : Number(dto.id)}, data : {descripcion : dto.nueva_descripcion}})
            return curso;
        }
        else
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso') 
    }   
    

    //Modificar categoria del curso
    async ModificarCategoria(dto : ModificarCategoria){ 
        const prof = this.sesion.inicioSesion(dto)
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)} })
        curso_inexistente(await curso, 'EL curso proporcionado no existe')
        if (await login_y_check(await prof, dto, await curso) == true){
            curso = this.base.curso.update({where : {id : Number(dto.id)}, data : {categoria : dto.nueva_categoria}})
            return curso;
        }
        else
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso') 
    }   
      
    /*
    //Modificar las palabras clave de un curso
    async ModificarPalabrasClave(dto : ModificarPalabrasClave){ 
        //iniciar sesion para poder modificar (?)
    const curso = this.base.curso.update({where : {id : (await curso).id}, data : {palabras_clave : dto.nuevas_palabras_clave}})

    return curso;
    }
    */

    //Modificar el estado del curso
    async ModificarEstadoCurso(dto : ModificarEstadoCurso){ 
        const prof = this.sesion.inicioSesion(dto)
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)} })
        curso_inexistente(await curso, 'EL curso proporcionado no existe')
        if (await login_y_check(await prof, dto, await curso) == true){
            //const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, '', '')        //Enviar notificaciones a los estudiantes
            curso = this.base.curso.update({where : {id : (await curso).id}, data : {estado : dto.nuevo_estado.toString()}})
            if((await curso).estudiantes.length != 0){
                this.envio.envioMensaje(construitEnvio(await this.envio.obtenerCorreoDeUnArray((await curso).estudiantes), obtenerMensajes(dto, (await curso).titulo)), (await this.claveCorreo).clave)
            }
            return curso;
        }
        else
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso') 
        }

    //Eliminar Curso desde la cuenta propia (Profesor elimina su curso)
    async EliminarCursoPropio(dto : modificar) {
        const prof = this.sesion.inicioSesion(dto)
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)} })
        curso_inexistente(await curso, 'EL curso proporcionado no existe')
        if (await login_y_check(await prof, dto, await curso) == true){
            const estudiantes = (await curso).estudiantes
            for (let i = 0; i < estudiantes.length; i++){
                this.suscripcion.desuscribir(new suscripcion((await this.base.usuario.findUnique({where : {id : estudiantes[i]}})).email, (await this.base.usuario.findUnique({where : {id : estudiantes[i]}})).clave, dto.id))
            }
            this.suscripcion.desuscribir(dto)
            curso = this.base.curso.delete({where : {id : Number(dto.id)}})
            return curso;
        }
        else
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso') 
    }
    /*

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