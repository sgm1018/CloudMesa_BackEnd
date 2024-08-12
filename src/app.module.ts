import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileItemModule } from './models/FileItem/FileItem.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/CloudMesa'), FileItemModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
