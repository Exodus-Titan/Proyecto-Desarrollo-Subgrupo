import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

//busqueda del curso por palabras clave
export class BusquedaPalabrasClaveCurso {
    
    @IsString()
    @IsNotEmpty()
    palabras_clave : Prisma.StringNullableListFilter

}