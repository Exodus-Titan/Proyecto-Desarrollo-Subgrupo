import { Controller, Post, Body } from "@nestjs/common";
import { servicioAutenticacion } from "./autenticacion.service";
import { busqueda, Login, Registro } from "./objetos para las requests";
import { eliminarUsuarioComoAdmin } from "./objetos para las requests/eliminarUsuarioComoAdmin.autenticacion";


@Controller('autenticacion')

export class controladorAutenticacion {
    constructor(private servicioAutenticacion : servicioAutenticacion){}

    @Post('registro')
    registro(@Body() dto : Registro) {
        console.groupCollapsed({dto,})
        return this.servicioAutenticacion.registro(dto);
    };

    @Post('inicioSesion')
    inicioSesion(@Body() dto : Login){
        return this.servicioAutenticacion.inicioSesion(dto);
    };
    
    @Post('buscarUsuario')
    buscarUsuario(@Body() dto : busqueda){
        return this.servicioAutenticacion.buscarUsuario(dto);
    };

    @Post('eliminarUsuarioPropio')
    eliminarUsuarioPropio(@Body() dto : Login){
        return this.servicioAutenticacion.eliminarUsuarioPropio(dto)
    }

    @Post('eliminarUsuarioComoAdmin')
    eliminarUsuarioComoAdmin(@Body() dto : eliminarUsuarioComoAdmin){
        return this.servicioAutenticacion.eliminarUsuarioComoAdmin(dto)
    }

}