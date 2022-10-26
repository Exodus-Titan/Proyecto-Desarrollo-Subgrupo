import { Curso } from "@prisma/client";
import { ForbiddenException } from "@nestjs/common";


export function curso_inexistente(curso : Curso, mensaje : string): void{
    if (!curso) 
            throw new ForbiddenException(mensaje)
}