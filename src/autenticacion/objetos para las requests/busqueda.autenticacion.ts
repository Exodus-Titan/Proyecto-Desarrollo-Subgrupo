import { IsNotEmpty, IsString } from "class-validator";

export class busqueda {
    
    @IsString()
    @IsNotEmpty()
    nombre_usuario? : string

    constructor(nombre : string){
        this.nombre_usuario = nombre
    }

}