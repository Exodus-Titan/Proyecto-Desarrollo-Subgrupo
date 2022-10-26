import { IsNotEmpty, IsString, IsEnum, IsNumber, IsEmail } from "class-validator";
import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";

export class CrearCurso {

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
    @IsString()
    nombre_usuario : string

}