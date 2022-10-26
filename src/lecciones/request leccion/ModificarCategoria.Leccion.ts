import { IsNotEmpty, IsString } from "class-validator";
import { ModificarLeccion } from "./Modificar.Leccion";

export class ModificarCategoriaLeccion extends ModificarLeccion{
    
    @IsNotEmpty()
    @IsString()
    categoria_a_cambiar : string
}