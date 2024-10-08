import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionController } from './PermissionController';
import { PermissionService } from './Permission.service';
import { Permission, PermissionSchema } from './Permission.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Permission.name, schema: PermissionSchema  }]), // Registro del modelo
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermisionModule {}