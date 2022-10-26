import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";

export class RegistroCurso {

    //Los @ en esta clase son decoradores de validacion 

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

    //estado
    @IsNotEmpty()
    @IsEnum(Estado_curso_Leccion)
    estado : Estado_curso_Leccion;

}