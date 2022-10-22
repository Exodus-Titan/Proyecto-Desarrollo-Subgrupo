import { Persona } from "./Persona";

class Usuario{
    id : number 
    nombre_usuario : string;
    email : string; //Hacer un campo de tipo email 
    clave : string;
    persona : Persona;

    public constructor (id : number, nombre_usuario : string, email : string, clave : string, persona: Persona){
        this.id = id;
        this.nombre_usuario = nombre_usuario;
        this.email = email;
        this.clave = clave;
        this.persona = persona;
    }
}