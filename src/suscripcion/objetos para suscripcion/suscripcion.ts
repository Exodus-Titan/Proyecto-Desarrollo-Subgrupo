import { IsInt, IsNotEmpty, IsNumberString } from "class-validator";
import { Login } from "src/autenticacion/objetos para las requests";

export class suscripcion extends Login{
    @IsNumberString()
    @IsNotEmpty()
    id : string

    constructor(email : string, clave : string, id: string){
        super()
        this.email = email;
        this.clave = clave;
        this.id = id
    }
}