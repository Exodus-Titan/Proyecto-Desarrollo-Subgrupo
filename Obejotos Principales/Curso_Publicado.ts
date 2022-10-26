import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Curso_Publicado extends Estado_Curso {
    estado_actual(): String {
        return "Publicado";
    }
    agregar_leccion(leccion: Leccion): void {
        this.curso.nueva_leccion(leccion);
    }
    retirar_leccion(leccion: Leccion): void {
        this.curso.eliminar_leccion(leccion);
    }
    inscribir_usuario(usuario: Usuario): boolean {
        this.curso.nuevo_estudiante(usuario);
        return true;
    }
    retirar_usuario(usuario: Usuario): boolean {
        this.curso.eliminar_estudainte(usuario);
        return true;
    }
    public publicar_mensaje(mensaje: Mensaje): void {
        let leccion: Leccion = mensaje.obtener_leccion();
        leccion.Publicar_Mensaje(mensaje);
    }
}