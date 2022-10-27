import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";
import { modificar } from "./modificar";

export class ModificarEstadoCurso extends modificar{
    
    @IsNotEmpty()
    @IsString()
    nuevo_estado : string
    
}