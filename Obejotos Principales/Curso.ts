import { Curso_Creado } from "./Curso_Creado";
import { Curso_Eliminado } from "./Curso_Eliminado";
import { Curso_Publicado } from "./Curso_Publicado";
import { Curso_Suspendido } from "./Curso_Suspendido";
import { Estado_Curso } from "./Estado_Curso";
import { ICursos_Y_Lecciones } from "./ICursos_Y_Lecciones";
import { Leccion } from "./Leccion";
import { Profesor } from "./Profesor";
import { Usuario } from "./usuario";

export class Curso implements ICursos_Y_Lecciones{

    private id : number; //Temp hacer tipo id (que no pueda ser negativo)
    private titulo : string;
    private descripcion : string;
    private categoria :string; // Tambien podria ser un enumerado
    private palabras_clave : string[]; //Tambien podria ser un array de enumerados 
    private profesor : Profesor; // Es el id del prof que dicta el curso
    private estudiantes_inscritos : Usuario[] = []; //Es un arrat con el id de cada estudiante inscritp en el curso 
    private estado : Estado_Curso;
    private lecciones : Leccion[] = [];

    public constructor(id: number, titulo: string, descripcion : string, categoria : string, palabras_clave : string[], profesor : Profesor){
        this.id = id;   
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.palabras_clave = palabras_clave;
        this.profesor = profesor;
        this.estado = new Curso_Creado(this);
    }
    
    private cambier_estado(estado: Estado_Curso): void{
        this.estado = estado;
    }
    
    // Metodos ejecutados en base al estado del curso
    public nuevo_estudiante(estudiante: Usuario): void{
        this.estudiantes_inscritos.push(estudiante);
    }

    public eliminar_estudainte(estudiante: Usuario): void {
        if (this.estudiantes_inscritos.includes(estudiante)){
            this.estudiantes_inscritos.splice(this.estudiantes_inscritos.indexOf(estudiante), 1);
        }
    }

    public nueva_leccion(leccion: Leccion, posicion?: number): void{
        if ((posicion === undefined) || (posicion > this.lecciones.length)) { //si el numero es mayor a la lista maxima, se coloca de ultimo
            this.lecciones.push(leccion);
        }else if(posicion < 1){ //si el numero es menor que 1, se coloca de primero
            this.lecciones.unshift(leccion);
        }else{  //coloca la leccion en la posicion indicada
            this.lecciones.splice(posicion-1, 0, leccion);
        }
    }

    public eliminar_leccion(leccion: Leccion): void{
        if (this.lecciones.includes(leccion)){
            this.lecciones.splice(this.lecciones.indexOf(leccion), 1);
        }
    }
    // Metodos ejecutados en base al estado del curso
    
    public publicar(): void{
        this.cambier_estado(new Curso_Publicado(this));
    }

    public suspender(): void{
        this.cambier_estado(new Curso_Suspendido(this));
    }

    public eliminar(): void{
        this.cambier_estado(new Curso_Eliminado(this));
    }

}