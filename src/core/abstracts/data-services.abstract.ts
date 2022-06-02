import { Address } from '../entities/address.entity';
import { Subscription } from '../entities/subscription.entity';
import { SubscriptionPlan } from '../entities/subscriptonPlan.entity';
import { User } from '../entities/user.entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract address: IGenericRepository<Address>;

  abstract subscription: IGenericRepository<Subscription>;

  abstract user: IGenericRepository<User>;

  abstract subscriptionPlan: IGenericRepository<SubscriptionPlan>;
}
