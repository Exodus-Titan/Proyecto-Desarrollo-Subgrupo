import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./inicionsecion.Leccion";

export class EliminarLeccion{

    @IsNotEmpty()
    @IsString()
    leccion_eliminar : string
}