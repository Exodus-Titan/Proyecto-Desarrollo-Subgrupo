import { Usuario } from "./Usuario";

export interface Estado_Curso {
    estado_actual(): String;
    inscribir_usuario(usuario: Usuario): void;
    retirar_usuario(usuario: Usuario): void;
}