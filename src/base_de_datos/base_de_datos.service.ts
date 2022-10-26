import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BaseDeDatosService extends PrismaClient{
    constructor(configuracion : ConfigService){
        super({
            datasources:{
                db:{
                    url: configuracion.get('DATABASE_URL')
                }
            }
        })
    }
}

