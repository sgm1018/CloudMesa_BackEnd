import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './User.schema';
import { UserService } from './User.service';
import { UserController } from './UserController';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema  }]), // Registro del modelo
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}