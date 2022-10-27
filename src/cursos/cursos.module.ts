import { Global, Module } from '@nestjs/common';
import { CursoControladorAutenticacion } from './cursos autenticacion/curso.controller';
import { CursoServicioAutenticacion } from './cursos autenticacion/curso.service';


@Global()
@Module({
    imports : [],
    controllers : [CursoControladorAutenticacion],
    providers : [CursoServicioAutenticacion],
    exports : [CursoServicioAutenticacion]
})
export class CursosModule {}
