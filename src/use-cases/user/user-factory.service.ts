import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactoryService {
  createUser(CreatUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.id = CreatUserDto.id;
    return newUser;
  }
  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.id = updateUserDto.id;
    return newUser;
  }
}
