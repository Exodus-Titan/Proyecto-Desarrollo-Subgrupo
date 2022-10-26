import { Body, Controller, Post } from '@nestjs/common';
import { suscripcion } from './objetos para suscripcion/suscripcion';
import { SuscripcionService } from './suscripcion.service';

@Controller('suscripcion')
export class SuscripcionController {

    constructor(private suscripcionService : SuscripcionService){}

    @Post('Suscribirse')
    suscribirse(@Body() dto : suscripcion) {
        console.groupCollapsed({dto,})
        return this.suscripcionService.suscribir(dto)    
    };

    @Post('Desuscribirse')
    desuscribirse(@Body() dto : suscripcion) {
        console.groupCollapsed({dto,})
        return this.suscripcionService.desuscribir(dto)    
    };
}
