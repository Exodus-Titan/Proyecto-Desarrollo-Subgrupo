export abstract class Persona {

    private id : number; //Temp hacer tipo id (que no pueda ser negativo)
    private nombre : string;
    private cursos? : number[]; //hacer el array de tipo id, en los prof. guarda los cursos que hizo y en estudiante a los que esta suscrito
    //los administradores no tienen cursos, por lo que no se usa ese atributo en ellos por eso es opcional 
    private estado : boolean; //Estado de la persona en la plataforma 

    public constructor(id: number, nombre: string){
        this.id = id;
        this.nombre = nombre;
        this.estado = false;
    }

    public suspender () : void{
        this.setEstado(false);
    }

    public Activar () : void{
        this.setEstado(true);
    }

    public getId() : number{
        return this.id;
    }

    public getNombre() : string{
        return this.nombre;
    }

    public getCursos?() : number[]{
        return this.cursos;
    }

    public getCursoEspecifico?(id : number) : number{
        for (let i =0; i<this.cursos.length; i++)
            if (id == this.cursos[i])
                return this.cursos[i];
        
        return 0;// Aqui poner un mensaje de error por q no esta suscrito al curso 
    }

    public getEstado() : boolean{
        return this.estado;
    }

    public setNombre(nombre: string) : void{
        this.nombre = nombre;
    }

    public setEstado(estado: boolean) : void{
        this.estado = estado;
    }

    public setCursos(cursos: number[]) : void{
        this.cursos = cursos;
    }

}