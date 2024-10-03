import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileController } from './FileController';
import { FileService } from './File.service';
import { FileSchema } from './File.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]), // Registro del modelo
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}