import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { FileItemService } from "./FileItem.service";
import { FileItem } from "./FileItem.schema";

@Controller('api/File')
export class FileItemController {

    constructor( private readonly fileService : FileItemService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.fileService.create();


    // }

    @Post()
    public async create(file: FileItem){
        const datos = await this.fileService.create(file);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al crear la entidad');
        }
        return datos.Value; // Devuelve los datos
    }


    @Get()
    public async getAll(){
        const datos = await this.fileService.getAll();
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener las entidades');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
