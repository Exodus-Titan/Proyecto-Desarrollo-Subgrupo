import { Curso } from "./Curso";
import { Estado_Usuario } from "./Estado_Usuario";
import { Suscriptor } from "./Suscriptor";

export abstract class Usuario implements Suscriptor{
    id : number 
    nombre_usuario : string;
    email : string; //Hacer un campo de tipo email 
    clave : string;
    cursos_inscritos : Curso[] = [];
    estado : Estado_Usuario;

    public constructor (id : number, nombre_usuario : string, email : string, clave : string){
        this.id = id;
        this.nombre_usuario = nombre_usuario;
        this.email = email;
        this.clave = clave;
    }

    public eliminar_curso(curso: Curso): void{
        if(this.cursos_inscritos.includes(curso))
        this.cursos_inscritos.splice(this.cursos_inscritos.indexOf(curso), 1);
    }
    
    public actualizar(): void {

    }
}