import { Curso } from "./Curso";
import { Usuario } from "./Usuario";

export class Profesor extends Usuario {
    cursos_como_profesor: Curso[] = [];
}