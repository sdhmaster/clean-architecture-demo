import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersRepository } from '../apis/subscriptions/modules/users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../apis/subscriptions/entites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  providers: [JwtStrategy, UsersRepository],
})
export class AuthModule {}
