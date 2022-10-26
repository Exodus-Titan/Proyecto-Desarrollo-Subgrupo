import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Curso_Eliminado extends Estado_Curso {
    estado_actual(): String {
        return "Eliminado";
    }
    agregar_leccion(leccion: Leccion): void {
        console.log('El curso se encuentra eliminado');
    }
    retirar_leccion(leccion: Leccion): void {
        console.log('El curso se encuentra eliminado');
    }
    inscribir_usuario(usuario: Usuario): void {
        console.log('El curso se encuentra eliminado');
    }
    retirar_usuario(usuario: Usuario): void {
        console.log('El curso se encuentra eliminado');
    }
    public publicar_mensaje(mensaje: Mensaje): void {
        console.log('El curso se encuentra eliminado');
    }
}