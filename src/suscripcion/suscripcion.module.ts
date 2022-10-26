import { Module, Global } from '@nestjs/common';
import { SuscripcionService } from './suscripcion.service';
import { SuscripcionController } from './suscripcion.controller';

@Global()
@Module({
  providers: [SuscripcionService],
  controllers: [SuscripcionController],
  exports : [SuscripcionService]
})
export class SuscripcionModule {}
