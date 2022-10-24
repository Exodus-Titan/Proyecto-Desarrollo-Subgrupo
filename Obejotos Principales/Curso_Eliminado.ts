import { Estado_Curso } from "./Estado_Curso";
import { Leccion } from "./Leccion";
import { Usuario } from "./Usuario";

export class Curso_Eliminado extends Estado_Curso {
    estado_actual(): String {
        return "Creado";
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
}