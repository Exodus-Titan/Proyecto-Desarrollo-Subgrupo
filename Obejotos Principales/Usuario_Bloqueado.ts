import { Curso } from "./Curso";
import { Estado_Usuario } from "./Estado_Usuario";
import { Mensaje } from "./Mensaje";

export class Usuario_Bloqueado extends Estado_Usuario {
    suscribir_curso(curso: Curso): boolean {
        console.log('El usuario se encuentra bloqueado');
        return false;
    }
    retirar_curso(curso: Curso): boolean {
        console.log('El usuario se encuentra bloqueado');
        return false;
    }
    publicar_mensaje(mensaje: Mensaje): void {
        
    }
    eliminar_mensaje(mensaje: Mensaje): void {
        
    }

}