import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './User.service';
import { UserController } from './UserController';
import { User, UserSchema } from './User.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Registro del modelo
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}