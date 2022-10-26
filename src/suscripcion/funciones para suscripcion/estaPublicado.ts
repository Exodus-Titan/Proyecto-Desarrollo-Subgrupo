import { Curso } from "@prisma/client";
import { ForbiddenException } from '@nestjs/common';

export function estaPublicado(curso : Curso){
    if(curso.estado != 'publicado'){
        throw new ForbiddenException('El curso no esta publicado, no se puede suscribir a este')
    }
}