import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./iniciosesion.curso";


export class EliminarCursoComoAdmin extends Login{
    @IsNotEmpty()
    @IsString()
    titulo_curso_eliminado : string;
}