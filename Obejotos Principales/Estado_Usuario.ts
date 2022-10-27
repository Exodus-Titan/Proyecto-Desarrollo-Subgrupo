import { Curso } from "./Curso";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export abstract class Estado_Usuario {
    protected estudiante: Usuario;

    public constructor(estudiante: Usuario){
      this.estudiante = estudiante;
    }

    public abstract suscribir_curso(curso: Curso): boolean;
    public abstract retirar_curso(curso: Curso): boolean;
    public abstract publicar_mensaje(mensaje: Mensaje): void;
    public abstract eliminar_mensaje(mensaje: Mensaje): void;
  }