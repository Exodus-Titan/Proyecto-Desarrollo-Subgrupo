import { Curso } from "./Curso";
import { Leccion } from "./Leccion";
import { Usuario } from "./Usuario";

export class Mensaje {
    private id: number;
    private remitente: Usuario;
    private texto: String;
    private leccion: Leccion;

    public constructor(id: number,remitente: Usuario, texto: String, leccion: Leccion){
        this.id = id;
        this.remitente = remitente;
        this.texto = texto;
        this.leccion = leccion;
    }

    public obtener_curso(): Curso{
        return this.leccion.obtener_curso();
    }

    public obtener_leccion(): Leccion{
        return this.leccion;
    }
}