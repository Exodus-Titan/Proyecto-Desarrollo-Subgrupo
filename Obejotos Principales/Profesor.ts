import { Persona } from "./Persona";

class Profesor extends Persona {

    public constructor(id: number, nombre: string ){
        let cursos : number[];
        super(id, nombre);
        this.setCursos(cursos);
    }

    
}