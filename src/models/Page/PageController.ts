import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { PageService } from "./Page.service";
import { Page, PageSchema } from "./Page.schema";

@Controller('api/File')
export class PageController {

    constructor( private readonly pageService : PageService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.fileService.create();


    // }

    @Post()
    public async create(page: Page){
        const datos = await this.pageService.create(page);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al crear la entidad');
        }
        return datos.Value; // Devuelve los datos
    }


    @Get()
    public async getAll(){
        const datos = await this.pageService.getAll();
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener las entidades');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
