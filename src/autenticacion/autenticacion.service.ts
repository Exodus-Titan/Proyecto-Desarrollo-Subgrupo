import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { envio } from "src/notificaciones/funciones";
import { envioDto } from "src/notificaciones/Objetos para notificaciones";
import { noEnviarClave, usuarioDuplicado, usuario_inexistente, esAdmin, convertirABuscar } from "./funciones";
import { busqueda, Login, Registro, eliminarUsuarioComoAdmin, modificarEmail, ModificarClave, ModificarNombreUsuario, ModificarNombre, ModificarEstado } from "./objetos para las requests";

@Injectable({})
export class servicioAutenticacion{

    constructor(private base: BaseDeDatosService){}

    async registro(dto: Registro) {     //Crear

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
        
            const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Su usuario se ha creado', 'Bienvenido a nuestra plataforma by Corsi')
            envio(datosEnvio)

            return noEnviarClave(usuario)
        }
        catch(error){
            usuarioDuplicado(error)
            throw error;
        }

        

    };
    

    async inicioSesion(dto : Login){  //Leer
        const usuario = await this.base.usuario.findUnique({where: {email : dto.email}})
        usuario_inexistente(usuario, 'No hay ninguna cuenta con el correo proporcionado asignado')
        if (usuario.clave == dto.clave) {
            return noEnviarClave(usuario)
        }else
            throw new ForbiddenException('Clave incorrecta')
    };

    async buscarUsuario(dto : busqueda){  // Leer
        const usuario = await this.base.usuario.findUnique({where : {nombre_usuario : dto.nombre_usuario}})
        usuario_inexistente(usuario, 'No hay ninguna cuenta con el nombre de usuario proporcionado asignado')
        return noEnviarClave(usuario);
    }

    async eliminarUsuarioPropio(dto : Login) {  //borrar
        const usuario = this.inicioSesion(dto)
        const usuarioAborrar = await this.base.usuario.delete({where : {id : (await usuario).id}})
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Su usuario se ha eliminado', 'Esperamos volver a verlo pronto')
        envio(datosEnvio)
        return noEnviarClave(usuarioAborrar)
    }

    async eliminarUsuarioComoAdmin(dto : eliminarUsuarioComoAdmin) {  //borrar
        const usuario = this.inicioSesion(dto)
        esAdmin(await usuario)
        const comprobacion = this.buscarUsuario(convertirABuscar(dto.nombre_usuario_a_borrar))
        usuario_inexistente(await comprobacion, 'No hay ninguna cuenta con el nombre de usuario proporcionado asignado')
        const usuarioAborrar = await this.base.usuario.delete({where : {nombre_usuario : dto.nombre_usuario_a_borrar}})
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Su usuario se ha eliminado', 'Esperamos volver a verlo pronto.    Esta accion fue realizada por el administrador ' + (await usuario).nombre_usuario)
        envio(datosEnvio)
        return noEnviarClave(usuarioAborrar)
    }

    async modificarEmail(dto : modificarEmail){     //actualizar
        let usuario = this.inicioSesion(dto)
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email + ', ' + dto.email_a_cambiar, 'Cambio de correo electronico', 'Se cambio su correo electronico de '+ dto.email + ' a ' + dto.email_a_cambiar)
        envio(datosEnvio)
        usuario = this.base.usuario.update({where : {email : (await usuario).email}, data : {email : dto.email_a_cambiar}})
        return usuario  
    }

    async modificarClave(dto : ModificarClave){     //actualizar
        let usuario = this.inicioSesion(dto)
        usuario = this.base.usuario.update({where : {email : (await usuario).email}, data : {clave : dto.clave_a_cambiar}})
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Se modifico su contraseña', 'Se realizo un cambio de contraseña en su cuenta')
        envio(datosEnvio)
        return usuario
    }

    async modificarNombreUsuario(dto : ModificarNombreUsuario){     //actualizar
        let usuario = this.inicioSesion(dto)
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Modificacion de nombre de usuario', 'Se modifico su nombre de usuario de ' + (await usuario).nombre_usuario + ' a ' + dto.nombre_usuario_a_cambiar)
        usuario = this.base.usuario.update({where : {email : (await usuario).email}, data : {nombre_usuario : dto.nombre_usuario_a_cambiar}})
        envio(datosEnvio)
        return usuario
    }

    async modificarNombre(dto : ModificarNombre){     //actualizar
        let usuario = this.inicioSesion(dto)
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, 'Su nombre fue cambiado', 'Se realizo un cambio de nombre en su cuenta de ' + (await usuario).nombre + ' a ' + dto.nombre_a_cambiar)
        envio(datosEnvio)
        usuario = this.base.usuario.update({where : {email : (await usuario).email}, data : {nombre : dto.nombre_a_cambiar}})
        return usuario
    }

    async modificarEstado(dto : ModificarEstado){     //actualizar
        let usuario = this.inicioSesion(dto)
        let nuevoEstado : boolean
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.email, '', '')
        if(dto.estado_a_cambiar == 'true'){
            nuevoEstado = true;
            datosEnvio.asunto = 'Se activo su cuenta';
            datosEnvio.mensaje = 'Gracias por terminar su registro en nuestra plataforma'
        }else{
            nuevoEstado = false;
            datosEnvio.asunto = 'Se desactivo su cuenta';
            datosEnvio.mensaje = 'Desafortunadamente se ha desactivado su cuenta por el momento'
        }
        usuario = this.base.usuario.update({where : {email : (await usuario).email}, data : {estado : nuevoEstado}})
        envio(datosEnvio)
        return usuario
    }
}