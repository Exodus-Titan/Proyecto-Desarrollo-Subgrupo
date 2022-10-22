import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService  } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { moduloAutenticacion } from './autenticacion/auntenticacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CursosModule } from './cursos/cursos.module';
import { BaseDeDatosModule } from './base_de_datos/base_de_datos.module';

@Module({
  imports: [moduloAutenticacion, UsuarioModule, CursosModule, BaseDeDatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}