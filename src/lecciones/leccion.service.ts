import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { lecciones_inexistentes } from "./funcones leccion/leccionesInexistentea";
import { comprobarAdminActivo } from "./funcones leccion/comprobaradmin";
import { BusquedaLeccion, ModificarCategoriaLeccion, ModificarDescripcionLeccion, ModificarPalabrasClaveLeccion, ModificarTituloLeccion, RegistroLeccion, Login } from "./request leccion";
import { servicioAutenticacion } from "src/autenticacion/autenticacion.service";
import { comprobarAdminOProfActivo, comprobarProfActivo } from "src/cursos/cursos autenticacion/funciones curso";
import { CursoServicioAutenticacion } from "src/cursos/cursos autenticacion/curso.service";
import { leccion_inexistente } from "./funcones leccion/leccionInexistente";



@Injectable({})
export class LeccionServicioAutenticacion{

    constructor(private base: BaseDeDatosService, private sesion : servicioAutenticacion, private curso : CursoServicioAutenticacion){}  
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
                        id_curso : Number(dto.id_curso)
                    }
                })
            
            let curso = this.base.curso.findUnique({where : {id : Number(dto.id_curso)}}) 
            let lecciones = (await curso).lecciones
            lecciones.push(leccion.id)
            curso = this.base.curso.update({where : {id : Number(dto.id_curso)}, data : {lecciones : lecciones} })
            console.log((await curso).lecciones)
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
        lecciones_inexistentes(leccion, 'No hay ninguna leccion con el titulo proporcionado asignado')
        return leccion
    }
    

    // Modificar titulo de leccion
    async modificarTitulo(dto : ModificarTituloLeccion){     //actualizar
        const prof = this.sesion.inicioSesion(dto)
        let leccion = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        if (comprobarAdminOProfActivo(await prof, Number(dto.id), await leccion)){
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
        if (comprobarAdminOProfActivo(await prof, Number(dto.id), await leccion)){
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
        if (comprobarAdminOProfActivo(await prof, Number(dto.id), await leccion)){
            leccion = this.base.leccion.update({where : {id : Number(dto.id)}, data : {categoria : dto.categoria_a_cambiar}})
            return leccion  
        }else{
            throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
    }
    /*
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
    }*/
    
    //El profesor elimina la leccion
    async eliminarLeccionProfesor(dto : Login){ 
        const prof = this.sesion.inicioSesion(dto)
        let leccion_eliminar = this.base.leccion.findUnique({where : {id : Number(dto.id)}})
        leccion_inexistente(await leccion_eliminar, 'La leccion indicada no existe')
        if (comprobarProfActivo(await prof)){
            let curso = this.base.curso.findUnique({where : {id : (await leccion_eliminar).id_curso}})
            let lecciones = (await curso).lecciones
            const index = lecciones.indexOf(Number(dto.id))
            if(index != -1){
                console.log(index)
                console.log(dto.id)
                lecciones.splice(index,1)
                console.log(lecciones)
                curso = this.base.curso.update({where : {id : (await curso).id}, data : {lecciones : lecciones}})
                console.log((await curso).lecciones)
                leccion_eliminar = this.base.leccion.delete({where : {id : Number(dto.id)}})
            return leccion_eliminar;
            }
        }
        else
            throw new ForbiddenException('El usuario con el que está inicianco sesión no es un profesor, no esta activo o no es el dueño del curso')
    
    }
    /*
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