/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from 'src/core/dtos/subscription.dto';
import Debug from 'debug';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';
import { UserFactoryService } from './user-factory.service';
const debug = Debug('sooldamhwa: subscription');
//const debug = Debug('sooldamhwa: subscription');

@Injectable()
export class UserUseCase {
  constructor(
    private dataService: IDataServices,
    private UserFactoryService: UserFactoryService,
  ) {}

  async getUser(userId) {
    return this.dataService.user.findOne({ id: userId });
  }
  async createUser(CreatUserDto: CreateUserDto) {}
  async updateUser(UpdateUserDto: UpdateUserDto) {
    const userInfo = this.UserFactoryService.updateUser(UpdateUserDto);
    this.dataService.user.update(userInfo);
  }
}
