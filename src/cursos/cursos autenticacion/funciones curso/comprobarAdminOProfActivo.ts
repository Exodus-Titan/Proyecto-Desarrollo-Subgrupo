import { Usuario } from "@prisma/client";
import { comprobarProfActivo } from "./comprobarProfActivo";
import { propietario } from "./propietarioDeCurso";

export function comprobarAdminOProfActivo(persona : Usuario, id : number): boolean{
    if ((persona.tipo == 'administrador') && (persona.estado == true))
        return true
        
    else if (comprobarProfActivo(persona) && propietario)
            return true
        
    else 
        return false
}