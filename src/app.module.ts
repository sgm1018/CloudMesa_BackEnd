import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './models/File/File.module';
import { PermisionModule } from './models/Permision/Permission.module';
import { UserModule } from './models/User/User.module';
import environment from './enviroment';

@Module({
  imports: [
    MongooseModule.forRoot(environment.db),
    FileModule,
    PermisionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
