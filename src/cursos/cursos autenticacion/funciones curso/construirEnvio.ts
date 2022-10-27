import { envioDto } from "src/notificaciones/Objetos para notificaciones";
import { datosMensajeEstados } from "../curso requests";

export function construitEnvio(emails : string, mensaje : datosMensajeEstados) : envioDto{
    return new envioDto('"Corsi Plataforma', emails, mensaje.asunto, mensaje.mensaje)
}