import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { servicioAutenticacion } from "./autenticacion.service";
import { busqueda, Login, ModificarClave, modificarEmail, ModificarNombreUsuario, Registro, eliminarUsuarioComoAdmin, ModificarNombre, ModificarEstado } from "./objetos para las requests";


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
    
    @Get('buscarUsuario')
    buscarUsuario(@Body() dto : busqueda){
        return this.servicioAutenticacion.buscarUsuario(dto);
    };

    @Delete('eliminarUsuarioPropio')
    eliminarUsuarioPropio(@Body() dto : Login){
        return this.servicioAutenticacion.eliminarUsuarioPropio(dto)
    }

    @Delete('eliminarUsuarioComoAdmin')
    eliminarUsuarioComoAdmin(@Body() dto : eliminarUsuarioComoAdmin){
        return this.servicioAutenticacion.eliminarUsuarioComoAdmin(dto)
    }

    @Post('modificarEmail')
    modificarEmail(@Body() dto : modificarEmail){
        return this.servicioAutenticacion.modificarEmail(dto)
    }

    @Post('modificarClave')
    modificarClave(@Body() dto : ModificarClave){
        return this.servicioAutenticacion.modificarClave(dto)
    }

    @Post('modificarNombreUsuario')
    modificarNombreUsuario(@Body() dto : ModificarNombreUsuario){
        return this.servicioAutenticacion.modificarNombreUsuario(dto)
    }

    @Post('modificarNombre')
    modificarNombre(@Body() dto : ModificarNombre){
        return this.servicioAutenticacion.modificarNombre(dto)
    }

    @Post('modificarEstado')
    modificarEstado(@Body() dto : ModificarEstado){
        return this.servicioAutenticacion.modificarEstado(dto)
    }

}