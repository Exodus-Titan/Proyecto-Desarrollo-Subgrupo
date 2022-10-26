import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { CursoServicioAutenticacion } from "./curso.service";
import { CrearCurso, BusquedaTituloCurso, BusquedaCategoriaCurso, BusquedaPalabrasClaveCurso, ModificarTitulo, ModificarDescripcion,  ModificarCategoria, ModificarPalabrasClave, ModificarEstadoCurso, Login, eliminarCursoComoAdmin} from "./curso requests";


@Controller('Autenticacion Curso')

export class CursoControladorAutenticacion {
    constructor(private CursoServicioAutenticacion : CursoServicioAutenticacion){}

    //Inicio Sesion Usuario (?)

    //Crear Curso
    @Post('RegistroCurso')
    crearCurso(@Body() dto : CrearCurso) {
        console.groupCollapsed({dto,})
        return this.CursoServicioAutenticacion.crearCurso(dto);
    };
    
    //Buscar curso por su titulo
    @Get('BuscarCurso')
    buscarCurso(@Body() dto : BusquedaTituloCurso){
        return this.CursoServicioAutenticacion.buscarCurso(dto);
    };

    //Buscar curso por su categorita
    @Get('BuscarCursoCategoria')
    BuscarCursoCategoria(@Body() dto : BusquedaCategoriaCurso){
        return this.CursoServicioAutenticacion.BuscarCursoCategoria(dto);
    };

    //Buscar curso por palabras clave
    @Get('BuscarCursoPalabrasClave')
    BuscarCursoPalabrasClave(@Body() dto : BusquedaPalabrasClaveCurso){
        return this.CursoServicioAutenticacion.BuscarCursoPalabrasClave(dto);
    };

    //Modificar Titulo del curso
    @Post('ModificarTitulo')
    modificarTitulo(@Body() dto : ModificarTitulo){
        return this.CursoServicioAutenticacion.modificarTitulo(dto)
    }

    //Modificar Descripcion del curso
    @Post('ModificarDescripcion')
    ModificarDescripcion(@Body() dto : ModificarDescripcion){
        return this.CursoServicioAutenticacion.ModificarDescripcion(dto)
    }

    //Modificar Categoria del curso
    @Post('ModificarCategoria')
    ModificarCategoria(@Body() dto : ModificarCategoria){
        return this.CursoServicioAutenticacion.ModificarCategoria(dto)
    }

    /* @Post('ModificarPalabrasClave')
    modificarPalabrasClave(@Body() dto : ModificarPalabrasClave){
        return this.CursoServicioAutenticacion.modificarPalabrasClave(dto)
    }

    @Post('ModificarEstadoCurso')
    ModificarEstadoCurso(@Body() dto : ModificarEstadoCurso){
        return this.CursoServicioAutenticacion.ModificarEstadoCurso(dto)

    @Delete('EliminarCursoPropio')
    EliminarCursoPropio(@Body() dto : Login){
        return this.CursoServicioAutenticacion.EliminarCursoPropio(dto)
    }

    @Delete('EliminarCursoComoAdmin')
    EliminarCursoComoAdmin(@Body() dto : EliminarCursoComoAdmin){
        return this.CursoServicioAutenticacion.EliminarCursoComoAdmin(dto)
    }

    } */

}