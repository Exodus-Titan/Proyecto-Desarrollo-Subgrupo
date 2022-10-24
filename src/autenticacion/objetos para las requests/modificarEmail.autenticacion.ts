import { IsEmail, IsNotEmpty } from "class-validator";
import { Login } from "./login.autenticacion";

export class modificarEmail extends Login{
    
    @IsEmail()
    @IsNotEmpty()
    email_a_cambiar :string
}