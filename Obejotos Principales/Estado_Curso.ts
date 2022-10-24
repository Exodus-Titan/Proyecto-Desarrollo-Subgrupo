import { Curso } from "./Curso";
import { Leccion } from "./Leccion";
import { Usuario } from "./Usuario";

export abstract class Estado_Curso {
    protected curso: Curso;

    public constructor(curso: Curso){
        this.curso = curso;
    }

    public abstract estado_actual(): String;
    public abstract agregar_leccion(leccion: Leccion): void;
    public abstract retirar_leccion(leccion: Leccion): void;
    public abstract inscribir_usuario(usuario: Usuario): void;
    public abstract retirar_usuario(usuario: Usuario): void;
}