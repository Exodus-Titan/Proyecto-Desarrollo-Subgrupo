import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "./login.autenticacion";

export class EliminarCursoComoAdmin extends Login{
    @IsNotEmpty()
    @IsString()
    titulo_curso_eliminado : string;
}