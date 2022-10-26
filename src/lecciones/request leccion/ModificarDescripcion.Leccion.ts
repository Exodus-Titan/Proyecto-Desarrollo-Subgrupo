import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class ModificarDescripcionLeccion extends Login{
    
    @IsNotEmpty()
    @IsString()
    descripcion_a_cambiar : string
}