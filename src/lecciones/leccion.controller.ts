import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { LeccionServicioAutenticacion } from "./leccion.service";
import { RegistroLeccion } from "./request leccion/registro.leccion";


@Controller('Autenticacion Leccion')

export class LeccionControladorAutenticacion {
    constructor(private LeccionServicioAutenticacion : LeccionServicioAutenticacion){}

    //Crear Leccion
    @Post('RegistroLeccion')
    registroLeccion(@Body() dto : RegistroLeccion) {
        console.groupCollapsed({dto,})
        return this.LeccionServicioAutenticacion.registroLeccion(dto);
    };
    
    /* @Get('BuscarLeccion')
    buscarLeccion(@Body() dto : BusquedaLeccion){
        return this.LeccionServicioAutenticacion.buscarLeccion(dto);
    };

    @Delete('EliminarLeccionPropio')
    eliminarLeccionPropio(@Body() dto : Login){
        return this.LeccionServicioAutenticacion.eliminarLeccionPropio(dto)
    }

    @Delete('EliminarLeccionComoAdmin')
    eliminarLeccionComoAdmin(@Body() dto : eliminarLeccionComoAdmin){
        return this.LeccionServicioAutenticacion.eliminarLeccionComoAdmin(dto)
    }

    @Post('ModificarTitulo')
    modificarTitulo(@Body() dto : ModificarTitulo){
        return this.LeccionServicioAutenticacion.modificarTitulo(dto)
    }

    @Post('ModificarDescripcion')
    modificarDescripcion(@Body() dto : ModificarDescripcion){
        return this.LeccionServicioAutenticacion.modificarDescripcion(dto)
    }

    @Post('ModificarCategoria')
    modificarCategoria(@Body() dto : ModificarCategoria){
        return this.LeccionServicioAutenticacion.modificarCategoria(dto)
    }

    @Post('ModificarPalabrasClave')
    modificarPalabrasClave(@Body() dto : ModificarPalabrasClave){
        return this.LeccionServicioAutenticacion.modificarPalabrasClave(dto)
    }*/
}