import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService)=>{
        return{
          secret: config.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: config.get<string | number>('JWT_EXPIRE')}
        }
      }
    }),
    MongooseModule.forFeature([{name: 'User' , schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
