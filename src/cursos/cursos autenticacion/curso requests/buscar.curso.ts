import { IsNotEmpty, IsString } from "class-validator";

//busqueda del curso por el titulo
export class BusquedaTituloCurso {
    
    @IsString()
    @IsNotEmpty()
    titulo : string

}