import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileItemController } from './FileItemController';
import { FileItemService } from './FileItem.service';
import { FileSchema } from './FileItem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]), // Registro del modelo
  ],
  controllers: [FileItemController],
  providers: [FileItemService],
})
export class FileItemModule {}