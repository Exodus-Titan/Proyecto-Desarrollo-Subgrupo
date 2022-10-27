import { IsNotEmpty, IsString, IsNumber, IsNumberString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";

export class RegistroLeccion extends Login{

    //Los @ en esta clase son decoradores de validacion 

    //titulo leccion
    @IsString()
    @IsNotEmpty()
    titulo : string;

    //descripcion leccion
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

    //id_curso
    @IsNotEmpty()
    @IsNumberString()
    id_curso : string;

}