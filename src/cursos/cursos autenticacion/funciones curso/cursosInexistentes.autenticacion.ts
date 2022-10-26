import { ForbiddenException } from "@nestjs/common";
import { Curso } from "@prisma/client";

export function cursos_inexistentes(curso : Curso[], mensaje : string):void {
    if (curso.length == 0) 
            throw new ForbiddenException(mensaje)
}