import { Usuario } from "@prisma/client";
import { ForbiddenException } from "@nestjs/common";

export function usuarioActivo (usuario : Usuario){
    if(usuario.estado == false) 
        throw new ForbiddenException('Su usuario no esta activo')
}