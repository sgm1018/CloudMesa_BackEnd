import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./User.schema";
import { UserService } from "./User.service";
import { AuthService } from "./auth/Auth.service";

@Controller('api/File')
export class UserController {

    constructor( private readonly userService : UserService, private readonly authService: AuthService){

    }

    // @Post()
    // public async create(@Body() createCatDto: CreateCatDto) {
    //     this.fileService.create();


    // }

    @Post()
    public async create(page: User){
        const datos = await this.userService.create(page);
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

    @Post('login')
    public async login(@Body() user: User){
        const datos = await this.authService.signIn(user);
        if (datos.Resultado !== 0) {
            throw new BadRequestException(datos.Mensaje || 'Error al obtener las entidades');
        }
        return datos.Value; // Devuelve los datos
    }
    
}
