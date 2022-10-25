import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { noEnviarClave, usuarioDuplicado, usuario_inexistente, esAdmin, convertirABuscar} from "./funciones";
import { busqueda, Login, Registro, eliminarUsuarioComoAdmin, modificarEmail } from "./objetos para las requests";

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
        return usuarioAborrar
    }

    async eliminarUsuarioComoAdmin(dto : eliminarUsuarioComoAdmin) {  //borrar
        const usuario = this.inicioSesion(dto)
        esAdmin(await usuario)
        const comprobacion = this.buscarUsuario(convertirABuscar(dto.nombre_usuario_a_borrar))
        usuario_inexistente(await comprobacion, 'No hay ninguna cuenta con el nombre de usuario proporcionado asignado')
        const usuarioAborrar = await this.base.usuario.delete({where : {nombre_usuario : dto.nombre_usuario_a_borrar}})
        return usuarioAborrar
    }

    async modificarEmail(dto : modificarEmail){
        let usuario = this.inicioSesion(dto)
        usuario = this.base.usuario.update({where : {email : dto.email}, data : {email : dto.email_a_cambiar}})
    }
}