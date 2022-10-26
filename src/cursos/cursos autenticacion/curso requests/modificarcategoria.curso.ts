import { IsNotEmpty, IsString } from "class-validator";
import { modificar } from "./modificar";

export class ModificarCategoria extends modificar{
    
    @IsNotEmpty()
    @IsString()
    nueva_categoria : string
    
}