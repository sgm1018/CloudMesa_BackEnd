import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/models/User/User.module';
import { JwtModule } from '@nestjs/jwt';
import environment from 'src/enviroment';

@Module({
  imports: [
    JwtModule.register({
      secret: environment.JwtToken, // Deberías usar una variable de entorno aquí
      signOptions: { expiresIn: '1h', audience: 'CloudmesaIssuer', issuer: 'CloudMesaIssuer', algorithm: 'RS512' }, // Opciones de expiración del token
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,]
})
export class AuthModule {}
