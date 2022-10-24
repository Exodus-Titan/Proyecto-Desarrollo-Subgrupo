import { ForbiddenException } from "@nestjs/common";
import { Usuario } from "@prisma/client";

export function usuario_inexistente(usuario : Usuario, mensaje : string):void {
    if (!usuario) 
            throw new ForbiddenException(mensaje)
}