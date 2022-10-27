import { Module } from '@nestjs/common';
import { LeccionControladorAutenticacion } from './leccion.controller';
import { LeccionServicioAutenticacion } from './leccion.service';

@Module({
    imports : [],
    controllers : [LeccionControladorAutenticacion],
    providers : [LeccionServicioAutenticacion]})
export class LeccionModule {}