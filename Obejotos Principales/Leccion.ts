import { Curso } from "./Curso";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Leccion{

    private id : number; //Temp hacer tipo id (que no pueda ser negativo)
    private titulo : string;
    private descripcion : string;
    private categoria :string; // Tambien podria ser un enumerado
    private palabras_clave : string[]; //Tambien podria ser un array de enumerados 
    private curso : Curso;  // Id del curso de la leccion
    private mensajes: Mensaje[] = [];


    public constructor(id: number, titulo: string, descripcion : string, categoria : string, palabras_clave : string[], curso : Curso){
        this.id = id;   
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.palabras_clave = palabras_clave;
        this.curso = curso;
    }

    public obtener_curso(): Curso{
        return this.curso;
    }

    public Publicar_Mensaje(mensaje: Mensaje): void{
        this.mensajes.push(mensaje);
    }
}