import { IsNotEmpty, IsString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";

export class CrearCurso extends Login{

    //titulo curso
    @IsString()
    @IsNotEmpty()
    titulo : string;

    //descripcion curso
    @IsString()
    @IsNotEmpty()
    descripcion : string;

    //categoria
    @IsString()
    @IsNotEmpty()
    categoria : string;

    //palabras_claves
    @IsString()
    @IsNotEmpty()
    palabras_clave : string;

}