import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BaseDeDatosService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                db:{
                    url: 'postgresql://postgres:desarrollo2022@localhost:5432/Corsi_Desarrollo?schema=public'
                }
            }
        })
    }
}
