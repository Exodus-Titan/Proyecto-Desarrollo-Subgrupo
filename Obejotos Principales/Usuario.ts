import { Persona } from "./Persona";

class Usuario{
    nombre_usuario : string;
    email : string; //Hacer un campo de tipo email 
    clave : string;
    persona : Persona;

    public constructor (nombre_usuario : string, email : string, clave : string, persona: Persona){
        this.nombre_usuario = nombre_usuario;
        this.email = email;
        this.clave = clave;
        this.persona = persona;
    }
}