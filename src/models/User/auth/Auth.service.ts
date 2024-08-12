import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../User.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findByEmail(email);
        return this.usersService.verifyPassword(pass, user.Value.HashedPassword)
            .then(async isMatch => {
                if (isMatch) {
                    const payload = { sub: user.Value.Id, email: user.Value.Email, rol: user.Value.Rol };
                    return {
                        access_token: await this.jwtService.signAsync(payload),
                    };
                } else {
                    throw new UnauthorizedException();
                }
            })
            .catch(err => {
                throw new UnauthorizedException();
            });
    }

    async register(email: string, password: string, password2: string): Promise<{ access_token: string }> {
        const user = await this.usersService.CreateUser(email, password, password2);
        if (user.Resultado !== 0) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.Value.Id, email: user.Value.Email, rol: user.Value.Rol };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}