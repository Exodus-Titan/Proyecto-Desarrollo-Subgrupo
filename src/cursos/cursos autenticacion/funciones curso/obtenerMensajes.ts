import { Estado_curso_Leccion } from "Tipos de Datos/enumeradoEstados";
import { datosMensajeEstados, ModificarEstadoCurso } from "../curso requests";

export function obtenerMensajes(dto : ModificarEstadoCurso, titulo : string) : datosMensajeEstados{
    switch(dto.nuevo_estado){
        case Estado_curso_Leccion.creado : 
            return new datosMensajeEstados('Se publicó el curso ' + titulo, 'Esperamos que estes listo para aprender algo nuevo con este curso');
        case Estado_curso_Leccion.eliminado : 
            return new datosMensajeEstados('Se eliminó el curso ' + titulo, 'Desafortunadamente tuvimos que eliminar este curso');
        case Estado_curso_Leccion.suspendido : 
            return new datosMensajeEstados('Se suspendió el curso ' + titulo, 'Desafortunadamente el curso esta temporalmente deshabilitado ');
        
    }
}