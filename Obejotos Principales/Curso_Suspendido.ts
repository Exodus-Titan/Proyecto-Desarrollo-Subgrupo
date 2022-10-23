import { Estado_Curso } from "./Estado_Curso";
import { Usuario } from "./Usuario";

export class Curso_Suspendido implements Estado_Curso {
    estado_actual(): String {
        return "Suspendido";
    }
    inscribir_usuario(usuario: Usuario): void {
        
    }
    retirar_usuario(usuario: Usuario): void {
        
    }

}