import { Curso } from "./Curso";
import { Estado_Usuario } from "./Estado_Usuario";
import { Mensaje } from "./Mensaje";
import { Usuario } from "./Usuario";
import { Usuario_Activo } from "./Usuario_Activo";
import { Usuario_Bloqueado } from "./Usuario_Bloqueado";

export class Estudiante extends Usuario {
    estado : Estado_Usuario;

    public constructor(id : number, nombre_usuario : string, email : string, clave : string, estado: Estado_Usuario){
        super(id, nombre_usuario, email, clave);
        this.activar();
    }

    public suscribir_curso(curso: Curso): void{
        if(this.estado.suscribir_curso(curso)){
            this.cursos_inscritos.push(curso)
        }
    }

    public retirar_curso(curso: Curso): void{
        if(this.estado.retirar_curso(curso)){
            this.cursos_inscritos.splice(this.cursos_inscritos.indexOf(curso), 1);
        }
    }

    public bloquear(): void{
        this.estado = new Usuario_Bloqueado(this);
    }

    public activar(): void{
        this.estado = new Usuario_Activo(this);
    }

    public publicar_mensaje(mensaje: Mensaje): void{
        this.estado.publicar_mensaje(mensaje)
    }
}