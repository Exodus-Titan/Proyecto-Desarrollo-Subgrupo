import { ForbiddenException } from "@nestjs/common";
import { Leccion } from "@prisma/client";

export function leccion_inexistente(leccion : Leccion, mensaje : string):void {
    if (!leccion) 
            throw new ForbiddenException(mensaje)
}