import { Curso, Usuario } from "@prisma/client";
import { ForbiddenException } from '@nestjs/common';

export function estaPublicado(curso : Curso, usuario : Usuario){
    if(curso.estado != 'publicado' && usuario.tipo != 'profesor'){
        return false
    }
    else 
        return true
}