import { Curso } from "./Curso";
import { Estado_Usuario } from "./Estado_Usuario";
import { Mensaje } from "./Mensaje";

export class Usuario_Activo extends Estado_Usuario {
    suscribir_curso(curso: Curso): void {
        
    }
    retirar_curso(curso: Curso): void {
        
    }
    publicar_mensaje(mensaje: Mensaje): void {
        let curso: Curso = mensaje.obtener_curso();
        curso.leccion_publicar_mensaje(mensaje);
    }
    eliminar_mensaje(mensaje: Mensaje): void {
        
    }

}