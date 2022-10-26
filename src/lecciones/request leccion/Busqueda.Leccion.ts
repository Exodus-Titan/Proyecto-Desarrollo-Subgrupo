import { IsNotEmpty, IsString } from "class-validator";

export class BusquedaLeccion {
    
    @IsString()
    @IsNotEmpty()
    titulo : string

}