import { Module } from '@nestjs/common';
import { CursoControladorAutenticacion } from './cursos autenticacion/curso.controller';
import { CursoServicioAutenticacion } from './cursos autenticacion/curso.service';

@Module({
    imports : [],
    controllers : [CursoControladorAutenticacion],
    providers : [CursoServicioAutenticacion]})
export class CursosModule {}
