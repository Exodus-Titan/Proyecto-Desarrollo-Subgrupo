import { IsNotEmpty, IsString } from "class-validator";
import { ModificarLeccion } from "./Modificar.Leccion";

export class ModificarPalabrasClaveLeccion extends ModificarLeccion{
    
    @IsNotEmpty()
    @IsString()
    palabras_clave_a_cambiar : string
}