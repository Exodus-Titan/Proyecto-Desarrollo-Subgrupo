import { IsNotEmpty, IsString } from "class-validator";
import { ModificarLeccion } from "./Modificar.Leccion";

export class ModificarDescripcionLeccion extends ModificarLeccion{
    
    @IsNotEmpty()
    @IsString()
    descripcion_a_cambiar : string
}