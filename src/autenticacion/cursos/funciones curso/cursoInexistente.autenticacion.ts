import { ForbiddenException } from "@nestjs/common";
import { Curso } from "@prisma/client";

export function curso_inexistente(curso : Curso, mensaje : string):void {
    if (!curso) 
            throw new ForbiddenException(mensaje)
}