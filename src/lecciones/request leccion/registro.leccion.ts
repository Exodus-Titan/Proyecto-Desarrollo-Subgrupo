import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class RegistroLeccion {

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
    @IsNumber()
    id_curso : number;

}