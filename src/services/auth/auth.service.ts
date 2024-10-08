import { RegisterDto } from './../../dto/Auth/RegisterDto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/models/User/User.service';
import bcrypt from 'bcrypt';
import { RItem } from 'src/utils/Ritem';
import { User } from 'src/models/User/User.schema';
import { register } from 'module';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async Login(
    email: string,
    pass: string,
  ): Promise<RItem<User>> {
    const datos = await this.usersService.getByEmail(email);
    if (datos.Resultado !== 0) {
      throw new UnauthorizedException();
    }
    const user = datos.Value;
    const isPasswordValid = await bcrypt.compare(pass, user.HashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    return new RItem<User>({
      Value: user,
      Resultado: 0,
      Mensaje: "Usuario encontrado"
    });
  }


  async Register(registerDto: RegisterDto): Promise<RItem<User>> {
    const datos = await this.usersService.getByEmail(registerDto.Email);
    if (datos.Resultado == 0) {
      return new RItem<User>({
        Resultado: -1,
        Mensaje: "Usuario ya existe"
      });
    }
    const hashedPassword = await bcrypt.hash(registerDto.Password, 14);
    const newUser: User = {
      Email: registerDto.Email,
      HashedPassword: hashedPassword,
      Rol: ['User'],
      FechaCreacion: new Date(),
      FechaModificacion: new Date(),
      FirstName: registerDto.FirstName,
      LastName: registerDto.LastName,
      DateOfBirth: registerDto.DateOfBirth
    };

    const user = await this.usersService.create(newUser);
    if (user.Resultado !== 0) {
      throw new UnauthorizedException();
    }
    return new RItem<User>({
      Value: user.Value,
      Resultado: 0,
      Mensaje: "Usuario creado correctamente"
    });
  }



  public GenerateToken(user: User): string {
    const payload = { sub: user.Id, username: user.Email };
    const secretKey = this.jwtService['options'].secret;
    console.log('Secret Key:', secretKey);
    return this.jwtService.sign(payload);
  }




}
