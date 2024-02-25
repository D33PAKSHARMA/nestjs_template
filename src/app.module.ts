import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
    PizzaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
