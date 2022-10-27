import { ForbiddenException, Injectable } from '@nestjs/common';
import { BaseDeDatosService } from 'src/base_de_datos/base_de_datos.service';
import { envio } from './funciones';
import { envioDto } from './Objetos para notificaciones';

@Injectable()
export class NotificacionesService {

    constructor(private base : BaseDeDatosService){}

    envioMensaje(dto :envioDto, claveCorreo : string): void{
        try{
            console.log(dto.correo)
            envio(dto, claveCorreo )
        }
        catch(error){
            throw new ForbiddenException('No se pudo enviar el correo')
        }

    }

    async obtenerCorreoDeUnArray(ids : number[]) : Promise<string>{
        let cadenaDeCorreos : string = ''
        for (let i = 0; i < ids.length; i++){
            console.log(ids[i])
            if (i != 0)
                cadenaDeCorreos =  cadenaDeCorreos + ', '
            let usuario = this.base.usuario.findUnique({where : {id : ids[i]}})
            cadenaDeCorreos = cadenaDeCorreos + (await usuario).email
        }
        console.log(cadenaDeCorreos)
        return cadenaDeCorreos
    }
    

}
