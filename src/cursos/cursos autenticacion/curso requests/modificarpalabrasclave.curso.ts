import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";

export class ModificarPalabrasClave extends Login{
    
    @IsNotEmpty()
    @IsString()
    nuevas_palabras_clave : string
    
}