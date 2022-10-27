import { modificar } from "../curso requests";
import { comprobarAdminOProfActivo } from "./comprobarAdminOProfActivo";
import { ForbiddenException } from "@nestjs/common";
import { Curso, Usuario } from "@prisma/client";

export async function login_y_check(prof : Usuario, dto : modificar, curso : Curso): Promise<boolean>{
        if (!comprobarAdminOProfActivo(await prof, Number(dto.id), await curso)){
            return false
            //throw new ForbiddenException('El usuario con el que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
        }
        else 
            return true
}