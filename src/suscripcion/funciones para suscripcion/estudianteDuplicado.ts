import { ForbiddenException } from "@nestjs/common";

export function estudianteDupliucado(idE : number, estudiantes : number[]){
    for(let i = 0; i <= estudiantes.length; i++)
        if (estudiantes[i] == idE)
            throw new ForbiddenException('Este estudiante ya esta suscrito en el curso')
}