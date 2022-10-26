import { IsNotEmpty, IsNumberString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";

export class modificar extends Login{
    @IsNotEmpty()
    @IsNumberString()
    id : string
}