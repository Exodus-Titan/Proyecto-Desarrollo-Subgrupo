import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { CursoServicioAutenticacion } from "./curso.service";
import { RegistroCurso, BusquedaCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, eliminarCursoComoAdmin} from "./requests curso";


@Controller('Autenticacion Curso')

export class CursoControladorAutenticacion {
    constructor(private CursoServicioAutenticacion : CursoServicioAutenticacion){}

    //Crear Curso
    @Post('RegistroCurso')
    registroCurso(@Body() dto : RegistroCurso) {
        console.groupCollapsed({dto,})
        return this.CursoServicioAutenticacion.registroCurso(dto);
    };
    
    //Buscar curso por su titulo
    @Get('BuscarCurso')
    buscarCurso(@Body() dto : BusquedaCurso){
        return this.CursoServicioAutenticacion.buscarCurso(dto);
    };

    /* @Post('ModificarTitulo')
    modificarTitulo(@Body() dto : ModificarTitulo){
        return this.CursoServicioAutenticacion.modificarTitulo(dto)
    }

    @Post('ModificarDescripcion')
    modificarDescripcion(@Body() dto : ModificarDescripcion){
        return this.CursoServicioAutenticacion.modificarDescripcion(dto)
    }

    @Post('ModificarCategoria')
    modificarCategoria(@Body() dto : ModificarCategoria){
        return this.CursoServicioAutenticacion.modificarCategoria(dto)
    }

    @Post('ModificarPalabrasClave')
    modificarPalabrasClave(@Body() dto : ModificarPalabrasClave){
        return this.CursoServicioAutenticacion.modificarPalabrasClave(dto)
    }

    @Post('modificarEstadoCurso')
    modificarEstadoCurso(@Body() dto : ModificarEstadoCurso){
        return this.CursoServicioAutenticacion.modificarEstadoCurso(dto)

    @Delete('EliminarCursoPropio')
    eliminarCursoPropio(@Body() dto : Login){
        return this.CursoServicioAutenticacion.eliminarCursoPropio(dto)
    }

    @Delete('EliminarCursoComoAdmin')
    eliminarCursoComoAdmin(@Body() dto : eliminarCursoComoAdmin){
        return this.CursoServicioAutenticacion.eliminarCursoComoAdmin(dto)
    }

    } */

}