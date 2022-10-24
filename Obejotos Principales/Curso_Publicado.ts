import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
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
    inscribir_usuario(usuario: Usuario): void {
        this.curso.nuevo_estudiante(usuario);
    }
    retirar_usuario(usuario: Usuario): void {
        this.curso.eliminar_estudainte(usuario);
    }

}