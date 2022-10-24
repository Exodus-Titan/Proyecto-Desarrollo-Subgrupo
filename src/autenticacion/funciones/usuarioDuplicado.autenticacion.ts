import { ForbiddenException } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export function usuarioDuplicado(error : Error): void {
    if (error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2002'){
            throw new ForbiddenException('Correo o nombre de usuario ya en uso')
        }
    }
    
}