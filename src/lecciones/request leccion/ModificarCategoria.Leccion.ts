import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class ModificarCategoriaLeccion extends Login{
    
    @IsNotEmpty()
    @IsString()
    categoria_a_cambiar : string
}