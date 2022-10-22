import { Global, Module } from '@nestjs/common';
import { BaseDeDatosService } from './base_de_datos.service';


@Global()
@Module({
  providers: [BaseDeDatosService],
  exports:[BaseDeDatosService]
})
export class BaseDeDatosModule {}
