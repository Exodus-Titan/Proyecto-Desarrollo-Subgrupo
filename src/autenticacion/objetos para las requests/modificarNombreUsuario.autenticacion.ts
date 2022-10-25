import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./login.autenticacion";

export class ModificarNombreUsuario extends Login{
    
    @IsNotEmpty()
    @IsString()
    nombre_usuario_a_cambiar : string
}