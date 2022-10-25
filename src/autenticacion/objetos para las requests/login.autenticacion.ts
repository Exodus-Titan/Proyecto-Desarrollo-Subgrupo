import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Login {
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    clave  : string

}