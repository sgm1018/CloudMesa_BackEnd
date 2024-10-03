import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FileService } from "./File.service";
import { File } from "./File.schema";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('File')
@Controller('api/File')
export class FileController {

    constructor( private readonly fileService : FileService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.fileService.create();


    // }

    @Post()
    public async create(@Body() file: File){
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

    @Get(':id')
    public async getById(@Param() params: any){
        const datos = await this.fileService.getById(params.id);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener la entidad');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
