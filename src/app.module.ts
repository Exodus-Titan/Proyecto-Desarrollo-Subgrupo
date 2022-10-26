import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { moduloAutenticacion } from './autenticacion/auntenticacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CursosModule } from './cursos/cursos.module';
import { BaseDeDatosModule } from './base_de_datos/base_de_datos.module';
import { ConfigModule } from '@nestjs/config'
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { SuscripcionModule } from './suscripcion/suscripcion.module';

@Module({
  imports: [moduloAutenticacion, UsuarioModule, CursosModule, BaseDeDatosModule, ConfigModule.forRoot({isGlobal : true}), NotificacionesModule, CursosModule, SuscripcionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}