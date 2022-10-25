import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { StringifyOptions } from "querystring";

export class envioDto{

    constructor(tipo: string, correo : string, asunto : string, mensaje : string){
        this.tipo_notificacion = tipo
        this.correo = correo
        this.asunto = asunto
        this.mensaje = mensaje
    }

    @IsNotEmpty()
    @IsString()
    tipo_notificacion : string  // El tipo de mensaje q se va a enviar, cambio de clave, notif de curso, notif de suspencion, etc

    @IsNotEmpty()
    @IsEmail()
    correo : string

    @IsNotEmpty()
    @IsString()
    asunto : string

    @IsNotEmpty()
    @IsString()
    mensaje : string

}