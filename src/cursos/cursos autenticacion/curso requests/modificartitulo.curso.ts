import { IsNotEmpty, IsString } from "class-validator";
import { modificar } from "./modificar";


export class ModificarTitulo extends modificar{

    @IsNotEmpty()
    @IsString()
    titulo : string
    
}