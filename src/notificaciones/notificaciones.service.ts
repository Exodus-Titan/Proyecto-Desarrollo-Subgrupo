import { ForbiddenException, Injectable } from '@nestjs/common';
import { envio } from './funciones';
import { envioDto } from './Objetos para notificaciones';

@Injectable()
export class NotificacionesService {

    envioMensaje(dto :envioDto): void{
        try{
            envio(dto)
        }
        catch(error){
            throw new ForbiddenException('No se pudo enviar el correo')
        }

    }
    

}
