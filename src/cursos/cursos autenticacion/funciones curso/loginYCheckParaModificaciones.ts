import { modificar } from "../curso requests";
import { comprobarAdminOProfActivo } from "./comprobarAdminOProfActivo";
import { ForbiddenException } from "@nestjs/common";
import { Curso, Usuario } from "@prisma/client";

export async function login_y_check(prof : Usuario, dto : modificar, curso : Curso){
    if (!comprobarAdminOProfActivo(await prof, Number(dto.id), curso)){
        throw new ForbiddenException('El usuario con le que esta inicianco sesion no es un profesor/administrador, no esta activo o no es el dueño del curso')
    }
}