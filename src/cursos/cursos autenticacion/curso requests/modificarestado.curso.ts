import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";

export class ModificarEstadoCurso extends Login{
    
    @IsNotEmpty()
    @IsString()
    nuevo_estado : string
    
}