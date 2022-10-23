import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Tipo_persona } from "Tipos de Datos/enumeradoTipoPersona";

export class Registro {

    //Los @ en esta clase son decoradores de validacion 

    @IsString()
    @IsNotEmpty()
    nombre_usuario : string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email : string;


    @IsString()
    @IsNotEmpty()
    clave : string;

    @IsString()
    @IsNotEmpty()
    nombre : string;

    @IsNotEmpty()
    @IsEnum(Tipo_persona)
    tipo : Tipo_persona;
}