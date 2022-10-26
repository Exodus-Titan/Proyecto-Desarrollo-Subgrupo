import { IsNotEmpty, IsString, IsNumberString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class ModificarTituloLeccion extends Login{
    
    @IsNotEmpty()
    @IsNumberString()
    id : string

    @IsNotEmpty()
    @IsString()
    titulo_a_cambiar : string
}