import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../model/user.model';
import { UserUseCase } from 'src/use-cases/user/user.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel]), PassportModule],
  providers: [JwtStrategy, UserUseCase],
})
export class AuthModule {}
