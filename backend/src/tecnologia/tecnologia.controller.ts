/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Controller, Get } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from "./tecnologia.prisma"
@Controller("tecnologias")
export class TecnologiaController {
    constructor(private readonly repo: TecnologiaPrisma) {}

    @Get()
    async ObterTodas(): Promise<Tecnologia[]> {
        return this.repo.ObterTodas()
    }
    @Get("destaques")
    async obterDestaques(): Promise<Tecnologia[]> {
        return this.repo.obterDestaques()
    }
}
