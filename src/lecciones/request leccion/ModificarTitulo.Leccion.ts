import { IsNotEmpty, IsString } from "class-validator";
import { ModificarLeccion } from "./Modificar.Leccion";

export class ModificarTituloLeccion extends ModificarLeccion{
    
    @IsNotEmpty()
    @IsString()
    titulo_a_cambiar : string
}