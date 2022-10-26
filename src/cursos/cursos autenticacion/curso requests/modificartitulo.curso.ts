import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";

export class ModificarTitulo extends Login{
    
    @IsNotEmpty()
    @IsString()
    nombre_titulo_nuevo : string
    
}