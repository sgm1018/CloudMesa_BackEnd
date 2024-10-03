import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionController } from './PermisionController';
import { PermissionService } from './Permission.service';
import { PermissionSchema } from './Permission.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: PermissionSchema  }]), // Registro del modelo
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermisionModule {}