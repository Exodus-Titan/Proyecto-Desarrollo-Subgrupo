import { Usuario } from "@prisma/client";
import { ForbiddenException } from "@nestjs/common";

export function esAdmin(usuario : Usuario) : void{
    if (usuario.tipo != 'administrador')
        throw new ForbiddenException('Este usuario no es un adminsitrador')
}