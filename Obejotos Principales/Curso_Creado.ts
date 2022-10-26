import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Curso_Creado extends Estado_Curso {
    estado_actual(): String {
        return "Creado";
    }
    agregar_leccion(leccion: Leccion): void {
        this.curso.nueva_leccion(leccion);
    }
    retirar_leccion(leccion: Leccion): void {
        this.curso.eliminar_leccion(leccion);
    }
    inscribir_usuario(usuario: Usuario): void {
        console.log('El curso no se encuentra publicado, no se puede suscribir nuevos estudiantes');
    }
    retirar_usuario(usuario: Usuario): void {
        this.curso.eliminar_estudainte(usuario);
    }
    public publicar_mensaje(mensaje: Mensaje): void {
        console.log('El curso no se encuentra publicado');
    }
}