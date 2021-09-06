import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://Kat:wgx1cX3dnEVhlIrz@cluster0.nzqb8.mongodb.net/Products?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
