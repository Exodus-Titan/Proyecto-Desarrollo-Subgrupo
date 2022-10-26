import { Usuario } from "@prisma/client";
import { propietario } from "src/cursos/cursos autenticacion/funciones curso";
import { ForbiddenException } from "@nestjs/common";


export function comprobarDuplicado(usuario : Usuario, id : number){
    if (!propietario(usuario, id))
        return
    else
        throw new ForbiddenException('Usted ya esta suscrito a este curso')
}