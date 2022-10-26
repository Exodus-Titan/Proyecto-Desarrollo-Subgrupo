import { IsNotEmpty, IsString } from "class-validator";

//busqueda del curso por el titulo
export class BusquedaCurso {
    
    @IsString()
    @IsNotEmpty()
    titulo : string

}