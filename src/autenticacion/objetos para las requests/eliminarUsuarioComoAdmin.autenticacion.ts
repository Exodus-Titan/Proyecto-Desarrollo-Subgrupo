import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./login.autenticacion";

export class eliminarUsuarioComoAdmin extends Login{
    @IsNotEmpty()
    @IsString()
    nombre_usuario_a_borrar : string;
}