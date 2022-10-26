import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { LeccionServicioAutenticacion } from "./leccion.service";
import { BusquedaLeccion } from "./request leccion/Busqueda.Leccion";
import { ModificarCategoriaLeccion } from "./request leccion/ModificarCategoria.Leccion";
import { ModificarDescripcionLeccion } from "./request leccion/ModificarDescripcion.Leccion";
import { ModificarPalabrasClaveLeccion } from "./request leccion/ModificarPalabrasClave.Leccion";
import { ModificarTituloLeccion } from "./request leccion/ModificarTitulo.Leccion";
import { RegistroLeccion } from "./request leccion/registro.leccion";


@Controller('Autenticacion Leccion')

export class LeccionControladorAutenticacion {
    constructor(private LeccionServicioAutenticacion : LeccionServicioAutenticacion){}
    /*
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

    @Post('ModificarPalabrasClave')
    modificarPalabrasClave(@Body() dto : ModificarPalabrasClaveLeccion){
        return this.LeccionServicioAutenticacion.modificarPalabrasClave(dto)
    }
    //Update

    //Delete
    /*@Delete('EliminarLeccionPropio')
    eliminarLeccionPropio(@Body() dto : Login){
        return this.LeccionServicioAutenticacion.eliminarLeccionPropio(dto)
    }

    @Delete('EliminarLeccionComoAdmin')
    eliminarLeccionComoAdmin(@Body() dto : eliminarLeccionComoAdmin){
        return this.LeccionServicioAutenticacion.eliminarLeccionComoAdmin(dto)
    }
    //Delete
    */
}