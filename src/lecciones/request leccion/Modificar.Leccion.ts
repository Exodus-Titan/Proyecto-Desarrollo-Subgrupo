import { IsNotEmpty, IsString } from "class-validator";

export class ModificarLeccion{
    
    @IsNotEmpty()
    @IsString()
    titulo : string
}