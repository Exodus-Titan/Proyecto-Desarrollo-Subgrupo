import { ForbiddenException, Injectable } from "@nestjs/common";
import { BaseDeDatosService } from "src/base_de_datos/base_de_datos.service";
import { leccion_inexistente } from "./funcones leccion/leccionInexistente";
import { BusquedaLeccion } from "./request leccion/Busqueda.Leccion";
import { ModificarLeccion } from "./request leccion/Modificar.Leccion";
import { ModificarCategoriaLeccion } from "./request leccion/ModificarCategoria.Leccion";
import { ModificarDescripcionLeccion } from "./request leccion/ModificarDescripcion.Leccion";
import { ModificarPalabrasClaveLeccion } from "./request leccion/ModificarPalabrasClave.Leccion";
import { ModificarTituloLeccion } from "./request leccion/ModificarTitulo.Leccion";
import { RegistroLeccion } from "./request leccion/registro.leccion";


@Injectable({})
export class LeccionServicioAutenticacion{

    constructor(private base: BaseDeDatosService){}
    /*
   
    //Crear Leccion
    async registroLeccion(dto: RegistroLeccion) {     

        try{
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

        }
        // Verificar si la leccion está duplicada
        catch(error){
            // leccionDuplicado(error)
            throw error;
        } 

    }

    async buscarLeccion(dto : BusquedaLeccion){  // Leer
        const leccion = await this.base.leccion.findUnique({where : {titulo : dto.titulo}})
        leccion_inexistente(leccion, 'No hay ninguna leccion con el titulo proporcionado asignado')
        return leccion
    }

    async modificarTitulo(dto : ModificarTituloLeccion){     //actualizar
        const leccion = this.base.leccion.update({where : {titulo : (await leccion).titulo}, data : {titulo : dto.titulo_a_cambiar}})
        return leccion  
    }

    async modificarDescripcion(dto : ModificarDescripcionLeccion){     //actualizar
        const leccion = this.base.leccion.update({where : {titulo : (await leccion).titulo}, data : {descripcion : dto.descripcion_a_cambiar}})
        return leccion  
    }

    async modificarCategoria(dto : ModificarCategoriaLeccion){     //actualizar
        const leccion = this.base.leccion.update({where : {titulo : (await leccion).titulo}, data : {categoria : dto.categoria_a_cambiar}})
        return leccion  
    }

    async modificarPalabrasClave(dto : ModificarPalabrasClaveLeccion){     //actualizar
        const leccion = this.base.leccion.update({where : {titulo : (await leccion).titulo}, data : {categoria : dto.palabras_clave_a_cambiar}})
        return leccion  
    }

    async eliminarLeccion(dto : ModificarLeccion) {  //borrar
        const leccion_eliminar = await this.base.leccion.delete({where : {id : (await leccion).id}})
        return leccion_eliminar
    }
    */
}