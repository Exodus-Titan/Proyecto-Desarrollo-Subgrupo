//comprobar admin
import { Usuario } from "@prisma/client";
    
export function comprobarAdminActivo(persona : Usuario, id : number): boolean{
    if ((persona.tipo == 'administrador') && (persona.estado == true))
        return true
            
    else 
        return false
}