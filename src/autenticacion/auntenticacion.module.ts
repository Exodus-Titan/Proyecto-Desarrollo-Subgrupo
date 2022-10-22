import { Module } from "@nestjs/common";
import { servicesVersion } from "typescript";
import { controladorAutenticacion } from "./autenticacion.controller";
import { servicioAutenticacion } from "./autenticacion.service";

@Module({
    controllers : [controladorAutenticacion],
    providers : [servicioAutenticacion]
})

export class moduloAutenticacion{}
