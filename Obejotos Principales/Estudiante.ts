import { Estado_Usuario } from "./Estado_Usuario";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";

export class Estudiante extends Usuario {
    estado : Estado_Usuario;

    public constructor(id : number, nombre_usuario : string, email : string, clave : string, estado: Estado_Usuario){
        super(id, nombre_usuario, email, clave);
        this.estado = estado;
    }

    public publicar_mensaje(mensaje: Mensaje): void{
        this.estado.publicar_mensaje(mensaje)
    }
}