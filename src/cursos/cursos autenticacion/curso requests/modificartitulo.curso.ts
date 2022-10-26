import { IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";


export class ModificarTitulo extends Login{
    
    @IsNotEmpty()
    @IsNumberString()
    id : string

    @IsNotEmpty()
    @IsString()
    titulo : string
    
}