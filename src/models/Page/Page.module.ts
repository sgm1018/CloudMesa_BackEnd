import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PageController } from './PageController';
import { PageService } from './Page.service';
import { Page, PageSchema } from './Page.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]), // Registro del modelo
  ],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}