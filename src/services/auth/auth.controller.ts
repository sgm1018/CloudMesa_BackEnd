import { Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/Auth/LoginDto';
import { RegisterDto } from 'src/dto/Auth/RegisterDto';
import { UserWithTokenDto } from 'src/dto/Auth/UserWithTokenDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/User')
export class AuthController {
    constructor(private AuthService : AuthService) {

    }


    @Post("Login")
    public async login(loginDto : LoginDto) : Promise<UserWithTokenDto>{
        const datos = await this.AuthService.Login(loginDto.Email, loginDto.Password);
        if (datos.Resultado != 0){  
            throw new UnauthorizedException();
        }
        const user = datos.Value;
        const token = this.AuthService.GenerateToken(user);
        const userWithToken : UserWithTokenDto = new UserWithTokenDto({User: user, Token: token});
        return userWithToken;

    } 


    @Post("Register")
    public async register(registerDto: RegisterDto) : Promise<UserWithTokenDto>{
        const datos = await this.AuthService.Register(registerDto);
        if (datos.Resultado != 0){  
            throw new UnauthorizedException();
        }
        const user = datos.Value;
        const token = this.AuthService.GenerateToken(user);
        const userWithToken : UserWithTokenDto = new UserWithTokenDto({User: user, Token: token});
        return userWithToken;

    }


}
