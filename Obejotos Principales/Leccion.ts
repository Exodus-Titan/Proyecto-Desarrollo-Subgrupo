import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";
import { Curso } from "./Curso";
import { ICursos_Y_Lecciones } from "./ICursos_Y_Lecciones";

export class Leccion implements ICursos_Y_Lecciones{

    private id : number; //Temp hacer tipo id (que no pueda ser negativo)
    private titulo : string;
    private descripcion : string;
    private categoria :string; // Tambien podria ser un enumerado
    private palabras_clave : string[]; //Tambien podria ser un array de enumerados 
    private curso : Curso;  // Id del curso de la leccion
    private estado : Estado_curso_Leccion


    public constructor(id: number, titulo: string, descripcion : string, categoria : string, palabras_clave : string[], curso : Curso){
        this.id = id;   
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.palabras_clave = palabras_clave;
        this.curso = curso;
        this.estado = 1;
    }

    public publicar(): void{

    }

    public suspender(): void{
        
    }

    public eliminar(): void{
        
    }

}