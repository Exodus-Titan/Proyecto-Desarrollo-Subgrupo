import { Controller, Post, Body } from "@nestjs/common";
import { servicioAutenticacion } from "./autenticacion.service";
import { Iregistro } from "./interfaces para las requests";


@Controller('autenticacion')

export class controladorAutenticacion {
    constructor(private servicioAutenticacion : servicioAutenticacion){}

    @Post('registro')
    registro(@Body() dto : Iregistro) {
        console.groupCollapsed({dto,})
        return this.servicioAutenticacion.registro();
    };

    @Post('inicioSesion')
    inicioSesion(){
        return this.servicioAutenticacion.inicioSesion();
    };
    

}