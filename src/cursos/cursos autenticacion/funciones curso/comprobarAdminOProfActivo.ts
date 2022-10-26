import { Curso, Usuario } from "@prisma/client";
import { comprobarProfActivo } from "./comprobarProfActivo";
import { propietario } from "./propietarioDeCurso";

export function comprobarAdminOProfActivo(persona : Usuario, id : number, curso : Curso): boolean{
    if ((persona.tipo == 'administrador') && (persona.estado == true) && (curso))
        return true
        
    else
         if (comprobarProfActivo(persona) && propietario(persona, id))
            return true
        
        else 
            return false
}