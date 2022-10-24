import { Controller, Post, Body } from "@nestjs/common";
import { servicioAutenticacion } from "./autenticacion.service";
import { Login, Registro } from "./objetos para las requests";


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
    

}