import { Estado_Curso } from "./Estado_Curso";
import { Usuario } from "./Usuario";

export class Curso_Eliminado implements Estado_Curso {
    estado_actual(): String {
        return "Eliminado";
    }
    inscribir_usuario(usuario: Usuario): void {
        
    }
    retirar_usuario(usuario: Usuario): void {
        
    }

}