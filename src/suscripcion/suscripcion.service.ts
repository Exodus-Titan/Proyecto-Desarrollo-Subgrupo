import { ForbiddenException, Injectable } from '@nestjs/common';
import { servicioAutenticacion } from 'src/autenticacion/autenticacion.service';
import { noEnviarClave } from 'src/autenticacion/funciones';
import { BaseDeDatosService } from 'src/base_de_datos/base_de_datos.service';
import { NotificacionesService } from 'src/notificaciones/notificaciones.service';
import { envioDto } from 'src/notificaciones/Objetos para notificaciones';
import { comprobarDuplicado } from './funciones para suscripcion/comporobarCursoDuplicado';
import { usuarioActivo } from './funciones para suscripcion/comprobarUsuarioActivo';
import { estaPublicado } from './funciones para suscripcion/estaPublicado';
import { mensaje } from './funciones para suscripcion/mensaje';
import { curso_inexistente } from './funciones para suscripcion/noExisteElCurso';
import { dtoMensaje } from './objetos para suscripcion/dtoMensaje';
import { suscripcion } from './objetos para suscripcion/suscripcion';

@Injectable()
export class SuscripcionService {

    constructor(private base : BaseDeDatosService, private sesion : servicioAutenticacion, private envio : NotificacionesService){}

    claveCorreo = this.base.correo.findUnique({where:{correo : 'desarrolloucab2022@gmail.com'}})

    async suscribir(dto : suscripcion){
        let usuario = this.sesion.inicioSesion(dto)
        let cursos = (await usuario).cursos
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)}})
        usuarioActivo(await usuario)
        curso_inexistente(await curso,'EL curso proporcionado no existe')
        if (estaPublicado(await curso,await  usuario)){
            comprobarDuplicado(await usuario, Number(dto.id))
            cursos.push(Number(dto.id))
            if ((await usuario).tipo == 'estudiante'){
                let estudiantes = (await curso).estudiantes
                estudiantes.push((await usuario).id)
                curso = this.base.curso.update({where : {id : Number(dto.id)}, data : {estudiantes : estudiantes}})
            } 
            usuario = this.base.usuario.update({where : {id : (await usuario).id}, data : {cursos : cursos}})
            this.envio.envioMensaje(mensaje(new dtoMensaje(await usuario, (await curso).titulo)), (await this.claveCorreo).clave)
            return noEnviarClave(await usuario)
        }
        else 
            throw new ForbiddenException('El curso no esta publicado, no se puede suscribir a este')
    }

    async desuscribir(dto : suscripcion){
        let usuario = this.sesion.inicioSesion(dto)
        let cursos = (await usuario).cursos
        let curso = this.base.curso.findUnique({where : {id : Number(dto.id)}})
        curso_inexistente(await curso,'EL curso proporcionado no existe')
        let index = cursos.indexOf(Number(dto.id))
        if(index != -1){
            cursos.splice(index,1)
            usuario = this.base.usuario.update({where : {id : (await usuario).id}, data : {cursos : cursos}})
        }
        else
            throw new ForbiddenException('Usted no esta suscrito a este curso')
        let estudiantes = (await curso).estudiantes
        index = estudiantes.indexOf((await usuario).id)
        if(index != -1){
            estudiantes.splice(index,1)
            curso = this.base.curso.update({where : {id : Number(dto.id)}, data : {estudiantes : estudiantes}})
        }
        else
            throw new ForbiddenException('Usted no esta suscrito a este curso')
            this.envio.envioMensaje( new envioDto('"Corsi Plataforma"', dto.email, 'Se ha desuscrito del curso ' + (await curso).titulo, 'Lamentamos que se haya tenido que retirar de este curso, pero siempre lo podra retomar'), (await this.claveCorreo).clave)
        return curso
    }
}
