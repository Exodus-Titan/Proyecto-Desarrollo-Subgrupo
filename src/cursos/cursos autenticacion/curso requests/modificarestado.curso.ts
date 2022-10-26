import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";
import { modificar } from "./modificar";

export class ModificarEstadoCurso extends modificar{
    
    @IsNotEmpty()
    @IsEnum(Estado_curso_Leccion)
    nuevo_estado : Estado_curso_Leccion
    
}