import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { PermissionService } from "./Permission.service";
import { Permission } from "./Permission.schema";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Permission')
@Controller('api/Permission')
export class PermissionController {

    constructor( private readonly PermissionService : PermissionService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.PermissionService.create();


    // }

    @Post()
    public async create(@Body() file: Permission){
        const datos = await this.PermissionService.create(file);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al crear la entidad');
        }
        return datos.Value; // Devuelve los datos
    }


    @Get()
    public async getAll(){
        const datos = await this.PermissionService.getAll();
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener las entidades');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
