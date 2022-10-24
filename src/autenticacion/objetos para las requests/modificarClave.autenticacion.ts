import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./login.autenticacion";

export class ModificarClave extends Login{
    
    @IsNotEmpty()
    @IsString()
    clave_a_cambiar : string
}