import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { Repository } from 'typeorm';
import { AddressModel } from './model/address.model';
import { SubscriptionModel } from './model/subscription.model';
import { SubscriptionPlanModel } from './model/subscriptionPlan.model';
import { UserModel } from './model/user.model';
import { MysqlGenericRepository } from './mysql-generic-repository';

@Injectable()
export class MysqlDataServices
  implements IDataServices, OnApplicationBootstrap
{
  address: MysqlGenericRepository<AddressModel>;
  user: MysqlGenericRepository<UserModel>;
  subscription: MysqlGenericRepository<SubscriptionModel>;
  subscriptionPlan: MysqlGenericRepository<SubscriptionPlanModel>;

  constructor(
    private AddressRepository: Repository<AddressModel>,
    private UserRepository: Repository<UserModel>,
    private SubscriptionRepository: Repository<SubscriptionModel>,
    private SubscriptionPlanRepository: Repository<SubscriptionPlanModel>,
  ) {}

  onApplicationBootstrap() {
    this.address = new MysqlGenericRepository<AddressModel>(
      this.AddressRepository,
    );

    this.user = new MysqlGenericRepository<UserModel>(this.UserRepository);
    this.subscription = new MysqlGenericRepository<SubscriptionModel>(
      this.SubscriptionRepository,
    );
    this.subscriptionPlan = new MysqlGenericRepository<SubscriptionPlanModel>(
      this.SubscriptionPlanRepository,
    );
  }
}
