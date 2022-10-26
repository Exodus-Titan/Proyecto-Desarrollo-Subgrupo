import { IsNotEmpty, IsString, IsEmail, IsNumberString } from "class-validator";

export class Login{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    clave  : string

    @IsNotEmpty()
    @IsNumberString()
    id : string
}