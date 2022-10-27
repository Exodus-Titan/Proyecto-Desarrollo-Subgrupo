import { ForbiddenException } from "@nestjs/common";
import { Leccion } from "@prisma/client";

export function lecciones_inexistentes(leccion : Leccion[], mensaje : string):void {
    if (leccion.length == 0) 
            throw new ForbiddenException(mensaje)
}