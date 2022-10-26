import { Curso } from "./Curso";
import { Estudiante } from "./Estudiante";
import { Mensaje } from "./Mensaje";

export abstract class Estado_Usuario {
    protected estudiante: Estudiante;

    public constructor(estudiante: Estudiante){
      this.estudiante = estudiante;
    }

    public abstract suscribir_curso(curso: Curso): void;
    public abstract retirar_curso(curso: Curso): void;
    public abstract publicar_mensaje(mensaje: Mensaje): void;
    public abstract eliminar_mensaje(mensaje: Mensaje): void;
  }