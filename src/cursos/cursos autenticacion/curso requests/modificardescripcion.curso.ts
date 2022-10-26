import { IsNotEmpty, IsString } from "class-validator";
import { modificar } from "./modificar";

export class ModificarDescripcion extends modificar{
    
    @IsNotEmpty()
    @IsString()
    nueva_descripcion : string
    
}