import { Usuario } from "@prisma/client";

export function propietario(prof : Usuario, id : number): boolean{
    for(let i = 0; i <= prof.cursos.length; i++){
        if (prof.cursos[i] == id)
            return true
    }
    return false
}