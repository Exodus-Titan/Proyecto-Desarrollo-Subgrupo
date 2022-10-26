import { Usuario } from "@prisma/client";

export function noEnviarClave(usuario : Usuario):Usuario{
    delete usuario.clave;
    return usuario;
}