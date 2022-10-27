import { envioDto } from "../Objetos para notificaciones";
import nodemailer = require('nodemailer')

export async function envio(dto : envioDto, claveCorreo : string): Promise<void>{

    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'desarrolloucab2022@gmail.com', // generated ethereal user
      pass: claveCorreo, // generated ethereal password
    },
  });


    dto.tipo_notificacion = dto.tipo_notificacion + ' <desarrolloucab2022@gmail.com>'

    //transporter.({auth: {pass : 'frqxdmgyolcjoudr'}})

    await transporter.sendMail({
        from: dto.tipo_notificacion, // sender address
        to: dto.correo, // list of receivers
        subject: dto.asunto, // Subject line
        text: dto.mensaje, // plain text body
    }); 
}