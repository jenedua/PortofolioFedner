/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaPrisma {
    constructor(private readonly prisma: PrismaProvider){}
    async ObterTodas() {
        return this.prisma.tecnologia.findMany();
    }
    async obterDestaques() {
        return this.prisma.tecnologia.findMany({
            where: {
                destaque: true
            }
        });
    }
}
