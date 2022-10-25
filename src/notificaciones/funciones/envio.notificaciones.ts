import { envioDto, transporter } from "../Objetos para notificaciones";

export async function envio(dto : envioDto): Promise<void>{

    dto.tipo_notificacion = dto.tipo_notificacion + ' <desarrolloucab2022@gmail.com>'

    await transporter.sendMail({
        from: dto.tipo_notificacion, // sender address
        to: dto.correo, // list of receivers
        subject: dto.asunto, // Subject line
        text: dto.mensaje, // plain text body
    }); 
}