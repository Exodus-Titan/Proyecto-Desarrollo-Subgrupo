import { Usuario } from "@prisma/client";


export function comprobarProfActivo(prof : Usuario) : boolean{
    if ((prof.tipo == 'profesor') && (prof.estado == true))
        return true
    else
        return false
}