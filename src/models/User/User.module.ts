import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './User.schema';
import { UserService } from './User.service';
import { UserController } from './UserController';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: UserSchema  }]), // Registro del modelo
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}