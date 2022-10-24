import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./login.autenticacion";

export class ModificarNombre extends Login{
    
    @IsNotEmpty()
    @IsString()
    nombre_a_cambiar : string
}