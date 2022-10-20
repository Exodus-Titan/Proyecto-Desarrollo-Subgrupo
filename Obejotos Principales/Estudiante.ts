import { Persona } from "./Persona";

class Estudiante extends Persona {

    public constructor(id: number, nombre: string ){
        let cursos : number[];
        super(id, nombre);
        this.setCursos(cursos);
    }

    
}