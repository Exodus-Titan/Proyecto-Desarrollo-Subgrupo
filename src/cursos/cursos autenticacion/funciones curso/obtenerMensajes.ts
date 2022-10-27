import { datosMensajeEstados, ModificarEstadoCurso } from "../curso requests";

export function obtenerMensajes(dto : ModificarEstadoCurso, titulo : string) : datosMensajeEstados{
    switch(dto.nuevo_estado){
        case 'publicado' : 
            return new datosMensajeEstados('Se publicó el curso ' + titulo, 'Esperamos que estes listo para aprender algo nuevo con este curso');
        case 'eliminado' : 
            return new datosMensajeEstados('Se eliminó el curso ' + titulo, 'Desafortunadamente tuvimos que eliminar este curso');
        case 'suspendido' : 
            return new datosMensajeEstados('Se suspendió el curso ' + titulo, 'Desafortunadamente el curso esta temporalmente deshabilitado ');
        
    }
}