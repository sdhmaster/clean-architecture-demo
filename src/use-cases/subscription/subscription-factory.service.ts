import { Injectable } from '@nestjs/common';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from 'src/core/dtos/subscription.dto';
import { Subscription } from 'src/core/entities';

@Injectable()
export class SubscriptionFactoryService {
  createSubscription(
    userId,
    monthlyPrice,
    status,
    created_at,
    update_at,
    createSubscriptionDto: CreateSubscriptionDto,
  ): Subscription {
    const newSubscription = new Subscription();
    newSubscription.user_id = userId;
    newSubscription.price = monthlyPrice * createSubscriptionDto.amount;
    newSubscription.status = status;
    newSubscription.created_at = created_at;
    newSubscription.updated_at = update_at;
    return newSubscription;
  }

  cancelSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const newSubscription = new Subscription();
    newSubscription.id = updateSubscriptionDto.id;
    return newSubscription;
  }
  skipSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const newSubscription = new Subscription();
    newSubscription.id = updateSubscriptionDto.id;
    return newSubscription;
  }
  cancelSkipSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const newSubscription = new Subscription();
    newSubscription.id = updateSubscriptionDto.id;
    return newSubscription;
  }
}
