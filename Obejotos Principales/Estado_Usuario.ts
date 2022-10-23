import { Curso } from "./Curso";
import { Leccion } from "./Leccion";

export interface Estado_Usuario {
    suscribir_curso(curso: Curso): void;
    retirar_curso(curso: Curso): void;
    publicar_mensaje(leccion: Leccion): void;
    eliminar_mensaje(leccion: Leccion): void;
  }