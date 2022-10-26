import { Usuario } from "@prisma/client";

export class dtoMensaje{
    usuario : Usuario
    titulo : string

    constructor(usuario : Usuario, titulo : string){
        this.usuario = usuario
        this.titulo = titulo
    }
}