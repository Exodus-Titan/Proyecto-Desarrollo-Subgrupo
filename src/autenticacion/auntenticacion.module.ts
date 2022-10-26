import { Global, Module } from "@nestjs/common";
import { controladorAutenticacion } from "./autenticacion.controller";
import { servicioAutenticacion } from "./autenticacion.service";

@Global()
@Module({
    controllers : [controladorAutenticacion],
    providers : [servicioAutenticacion],
    exports : [servicioAutenticacion]
})

export class moduloAutenticacion{}
