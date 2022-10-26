import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";

export class ModificarDescripcion extends Login{
    
    @IsNotEmpty()
    @IsString()
    nueva_descripcion : string
    
}