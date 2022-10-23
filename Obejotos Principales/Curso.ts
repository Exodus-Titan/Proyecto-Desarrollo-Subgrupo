import { Estado_Curso } from "./Estado_Curso";
import { Estudiante } from "./Estudiante";
import { ICursos_Y_Lecciones } from "./ICursos_Y_Lecciones";
import { Leccion } from "./Leccion";
import { Profesor } from "./Profesor";

export class Curso implements ICursos_Y_Lecciones{

    private id : number; //Temp hacer tipo id (que no pueda ser negativo)
    private titulo : string;
    private descripcion : string;
    private categoria :string; // Tambien podria ser un enumerado
    private palabras_clave : string[]; //Tambien podria ser un array de enumerados 
    private profesor : Profesor; // Es el id del prof que dicta el curso
    private estudiantes_inscritos : Estudiante[] = []; //Es un arrat con el id de cada estudiante inscritp en el curso 
    private estado : Estado_Curso;
    private lecciones : Leccion[];

    public constructor(id: number, titulo: string, descripcion : string, categoria : string, palabras_clave : string[], profesor : Profesor, estado : Estado_Curso){
        this.id = id;   
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.palabras_clave = palabras_clave;
        this.profesor = profesor;
        this.estado = estado;
    }

    public publicar(): void{

    }

    public suspender(): void{
        
    }

    public eliminar(): void{
        
    }

}