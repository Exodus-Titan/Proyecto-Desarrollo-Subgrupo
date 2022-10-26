import { Usuario } from "@prisma/client";
import { envioDto } from "src/notificaciones/Objetos para notificaciones";
import { dtoMensaje } from "../objetos para suscripcion/dtoMensaje";

export function mensaje(dto : dtoMensaje) : envioDto{     
    if(dto.usuario.tipo == 'estudiante'){
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.usuario.email, 'Se ha suscrito a el curso ' + dto.titulo, 'Esperamos que aprenda todo lo que este curso tiene para ofrecer')
        return datosEnvio
    }
    else {   
        const datosEnvio = new envioDto('"Corsi Plataforma"', dto.usuario.email, 'Ha creado el curso ' + dto.titulo, 'Esperamos poder trabajar con usted en muchos mas proyectos')
        return datosEnvio
}
}