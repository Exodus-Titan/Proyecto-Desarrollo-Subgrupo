import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { leccion_inexistente } from "./funcones leccion/leccionInexistente";
import { comprobarAdminActivo } from "./funcones leccion/comprobaradmin";
import { BusquedaLeccion, ModificarCategoriaLeccion, ModificarDescripcionLeccion, ModificarPalabrasClaveLeccion, ModificarTituloLeccion, RegistroLeccion, EliminarLeccion } from "./request leccion";
import { servicioAutenticacion } from "src/autenticacion/autenticacion.service";
import { comprobarAdminOProfActivo, comprobarProfActivo } from "src/cursos/cursos autenticacion/funciones curso";



@Injectable({})
export class LeccionServicioAutenticacion{

    constructor(private base: BaseDeDatosService, private sesion : servicioAutenticacion){}
/*    
    //Crear Leccion
    async registroLeccion(dto: RegistroLeccion) {     

        try{
            const prof = this.sesion.inicioSesion(dto)
            if (comprobarProfActivo( await (prof))){
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
            }else{
                throw new ForbiddenException('El usuario con el que intenta iniciar sesio no es un profesor/administrador o no esta activo actualmente')
            }
        }
        // Verificar si la leccion está duplicada
        catch(error){
            throw error;
        } 

    }

    async buscarLeccion(dto : BusquedaLeccion){  // Leer
        const leccion = await this.base.leccion.findMany({where : {titulo : dto.titulo}})
        leccion_inexistente(leccion, 'No hay ninguna leccion con el titulo proporcionado asignado')
        return leccion
    }

    // Modificar titulo de leccion
    async modificarTitulo(dto : ModificarTituloLeccion){     //actualizar
        const prof = this.sesion.inicioSesion(dto)
        let leccion = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminOProfActivo(await prof, Number(dto.id))){
            leccion = this.base.leccion.update({where : {id : Number(dto.id)}, data : {titulo : dto.titulo_a_cambiar}})
            return leccion  
        }else{
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
    }

    // Modificar descripcion de leccion
    async modificarDescripcion(dto : ModificarDescripcionLeccion){     //actualizar
        const prof = this.sesion.inicioSesion(dto)
        let leccion = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminOProfActivo(await prof, Number(dto.id))){
            leccion = this.base.leccion.update({where : {id : Number(dto.id)}, data : {descripcion : dto.descripcion_a_cambiar}})
            return leccion  
        }else{
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
    }

    // Modificar categoria de leccion
    async modificarCategoria(dto : ModificarCategoriaLeccion){     //actualizar
        const prof = this.sesion.inicioSesion(dto)
        let leccion = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminOProfActivo(await prof, Number(dto.id))){
            leccion = this.base.leccion.update({where : {id : Number(dto.id)}, data : {categoria : dto.categoria_a_cambiar}})
            return leccion  
        }else{
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
    }

    // Modificar palabras clave de leccion
    async modificarPalabrasClave(dto : ModificarPalabrasClaveLeccion){     //actualizar
        const prof = this.sesion.inicioSesion(dto)
        let leccion = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminOProfActivo(await prof, Number(dto.id))){
            leccion = this.base.leccion.update({where : {id : Number(dto.id)}, data : {palabras_clave : dto.palabras_clave_a_cambiar}})
            return leccion  
        }else{
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
    }

    //El profesor elimina la leccion
    async eliminarLeccionProfesor(dto : EliminarLeccion){ 
        const prof = this.sesion.inicioSesion(dto)
        let leccion_eliminar = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarProfActivo(await prof, Number(dto.id))){
            leccion_eliminar = this.base.leccion.delete({where : {id : Number(dto.id)}})
            return leccion_eliminar;
        }
        else
            throw new ForbiddenException('El usuario con el que está inicianco sesión no es un profesor, no esta activo o no es el dueño del curso')
    
    }

    //Un administrador elimina la leccion
    async eliminarLeccionAdmin(dto : EliminarLeccion){ 
        const prof = this.sesion.inicioSesion(dto)
        let leccion_eliminar = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminActivo(await prof, Number(dto.id))){
            leccion_eliminar = this.base.leccion.delete({where : {id : Number(dto.id)}})
            return leccion_eliminar;
        }
        else
            throw new ForbiddenException('El usuario con el que está inicianco sesión no es un administrador, no esta activo o no es el dueño del curso')
    
    } */
    
}