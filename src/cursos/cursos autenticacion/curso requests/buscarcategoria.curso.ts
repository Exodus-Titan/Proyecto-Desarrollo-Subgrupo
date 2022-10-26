import { IsNotEmpty, IsString } from "class-validator";

//busqueda del curso por la categoria
export class BusquedaCategoriaCurso {
    
    @IsString()
    @IsNotEmpty()
    categoria : string

}