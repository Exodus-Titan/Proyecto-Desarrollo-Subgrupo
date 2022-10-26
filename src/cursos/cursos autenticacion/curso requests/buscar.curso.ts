import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";

//busqueda del curso por el titulo
export class BusquedaTituloCurso{
    
    @IsString()
    @IsNotEmpty()
    titulo : string

}