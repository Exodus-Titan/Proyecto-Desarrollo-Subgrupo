import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Curso_Suspendido extends Estado_Curso {
    estado_actual(): String {
        return "Suspendido";
    }
    agregar_leccion(leccion: Leccion): void {
        console.log('El curso se encuentra suspendido');
    }
    retirar_leccion(leccion: Leccion): void {
        console.log('El curso se encuentra suspendido');
    }
    inscribir_usuario(usuario: Usuario): void {
        console.log('El curso se encuentra suspendido');
    }
    retirar_usuario(usuario: Usuario): void {
        console.log('El curso se encuentra suspendido');
    }    
    public publicar_mensaje(mensaje: Mensaje): void {
        console.log('El curso se encunetra suspendido');
    }
}