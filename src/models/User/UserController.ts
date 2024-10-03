import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./User.schema";
import { UserService } from "./User.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('api/User')
export class UserController {

    constructor( private readonly userService : UserService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.userService.create();


    // }

    @Post()
    public async create(@Body() file: User){
        const datos = await this.userService.create(file);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al crear la entidad');
        }
        return datos.Value; // Devuelve los datos
    }


    @Get()
    public async getAll(){
        const datos = await this.userService.getAll();
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener las entidades');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
