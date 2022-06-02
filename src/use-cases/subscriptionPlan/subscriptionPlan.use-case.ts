/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from 'src/core/dtos/subscription.dto';
import { SubscriptionPlanFactoryService } from './subscriptionPlan-factory.service';
import Debug from 'debug';
import { UserUseCase } from '../user/user.use-case';
import { Subscription } from 'src/core/entities';
import { CONSTANTS } from 'src/configuration/constants';
import { UpdateUserDto } from 'src/core/dtos/user.dto';
const debug = Debug('sooldamhwa: subscription');
//const debug = Debug('sooldamhwa: subscription');

@Injectable()
export class SubscriptionPlanUseCase {
  constructor(
    private dataService: IDataServices,
    private subscriptionFactoryService: SubscriptionPlanFactoryService,
    private userUseCases: UserUseCase,
  ) {}

  async getSubscriptionPlan(planId) {
    return this.dataService.subscriptionPlan.findOne({
      subscription_plan_id: planId,
    });
  }
}
