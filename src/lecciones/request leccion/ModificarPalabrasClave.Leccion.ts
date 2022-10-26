import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class ModificarPalabrasClaveLeccion extends Login{
    
    @IsNotEmpty()
    @IsString()
    palabras_clave_a_cambiar : string
}