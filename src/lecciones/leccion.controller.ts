import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { LeccionServicioAutenticacion } from "./leccion.service";
import { BusquedaLeccion, ModificarCategoriaLeccion, ModificarDescripcionLeccion, ModificarPalabrasClaveLeccion, ModificarTituloLeccion, RegistroLeccion, Login } from "./request leccion";


@Controller('leccion')

export class LeccionControladorAutenticacion {
    constructor(private LeccionServicioAutenticacion : LeccionServicioAutenticacion){}
 
    //Create
    @Post('RegistroLeccion')
    registroLeccion(@Body() dto : RegistroLeccion) {
        console.groupCollapsed({dto,})
        return this.LeccionServicioAutenticacion.registroLeccion(dto);
    };
    //Create
    
    //Read
    @Get('BuscarLeccion')
    buscarLeccion(@Body() dto : BusquedaLeccion){
        return this.LeccionServicioAutenticacion.buscarLeccion(dto);
    };
    //Read

    //Update
    @Post('ModificarTituloLeccion')
    modificarTitulo(@Body() dto : ModificarTituloLeccion){
        return this.LeccionServicioAutenticacion.modificarTitulo(dto)
    }

    @Post('ModificarDescripcion')
    modificarDescripcion(@Body() dto : ModificarDescripcionLeccion){
        return this.LeccionServicioAutenticacion.modificarDescripcion(dto)
    }

    @Post('ModificarCategoria')
    modificarCategoria(@Body() dto : ModificarCategoriaLeccion){
        return this.LeccionServicioAutenticacion.modificarCategoria(dto)
    }
    /*
    @Post('ModificarPalabrasClave')
    modificarPalabrasClave(@Body() dto : ModificarPalabrasClaveLeccion){
        return this.LeccionServicioAutenticacion.modificarPalabrasClave(dto)
    }
    */
    //Update
    
    //El profesor elimina la leccion
    @Delete('EliminarLeccionProf')
    eliminarLeccionProfesor(@Body() dto : Login){
        return this.LeccionServicioAutenticacion.eliminarLeccionProfesor(dto)
    }

    /*

    //Un administrador elimina la leccion
    @Delete('EliminarLeccionComoAdmin')
    eliminarLeccionAdmin(@Body() dto : EliminarLeccion){
        return this.LeccionServicioAutenticacion.eliminarLeccionAdmin(dto)
    }
 */

}