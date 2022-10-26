import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class ModificarTituloLeccion extends Login{

    @IsNotEmpty()
    @IsString()
    titulo_a_cambiar : string
}