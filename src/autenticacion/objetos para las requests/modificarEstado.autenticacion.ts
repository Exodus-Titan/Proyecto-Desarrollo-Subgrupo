import { IsBooleanString, IsNotEmpty } from "class-validator";
import { Login } from "./login.autenticacion";

export class ModificarEstado extends Login{
    
    @IsNotEmpty()
    @IsBooleanString() // Se puede cambiar despues cuando el se haga el forntend
    estado_a_cambiar : string
}