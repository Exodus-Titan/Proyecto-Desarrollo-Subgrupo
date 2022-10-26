import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";

export class ModificarCategoria extends Login{
    
    @IsNotEmpty()
    @IsString()
    nueva_categoria : string
    
}