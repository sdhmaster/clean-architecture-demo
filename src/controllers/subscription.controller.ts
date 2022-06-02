import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  UseGuards,
  HttpException,
  Request,
} from '@nestjs/common';

import { MESSAGES } from '../configuration/messages';

// import { SubscriptionsService } from './subscriptions.service';
import { JwtAuthGuard } from '../frameworks/auth/jwt-auth.guard';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from 'src/core/dtos/subscription.dto';
import { SubscriptionUseCase } from 'src/use-cases/subscription/subscription.use-case';

@Controller('subscription')
export class SubscriptionsController {
  constructor(private subscriptionUserCases: SubscriptionUseCase) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async createSubscription(
    @Request() req,
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ) {
    try {
      if (!req.user || !req.user.id) {
        throw new HttpException(
          MESSAGES.ERR_LOGIN_REQUIRED,
          HttpStatus.FORBIDDEN,
        );
      }
      await this.subscriptionUserCases.createSubscription(
        req.user.id,
        createSubscriptionDto,
      );
      return {
        statusCode: HttpStatus.OK,
        message: MESSAGES.SUCCESS_TO_SUBSCRIBE,
      };
    } catch (err) {
      throw err;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Patch('/cancel/:subscriptionId')
  async cancelSubscription(
    @Request() req,
    @Param('subscriptionId') subscriptionId: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    try {
      if (!req.user || !req.user.id) {
        throw new HttpException(
          MESSAGES.ERR_LOGIN_REQUIRED,
          HttpStatus.FORBIDDEN,
        );
      }
      await this.subscriptionUserCases.cancelSubscription(
        req.user.id,
        subscriptionId,
        updateSubscriptionDto,
      );
      return {
        statusCode: HttpStatus.OK,
        message: MESSAGES.SUCCESS_TO_CANCEL_SUBSCRIPTION,
      };
    } catch (err) {
      throw err;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Patch('/skip/:subscriptionId')
  async skipSubscription(
    @Request() req,
    @Param('subscriptionId') subscriptionId: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    try {
      if (!req.user || !req.user.id) {
        // throw new HttpException(
        //   MESSAGES.ERR_LOGIN_REQUIRED,
        //   HttpStatus.FORBIDDEN,
        // );
      }
      await this.subscriptionUserCases.skipSubscription(
        req.user.id,
        subscriptionId,
        updateSubscriptionDto,
      );
      return {
        statusCode: HttpStatus.OK,
        message: MESSAGES.SUCCESS_TO_SKIP_SUBSCRIPTION,
      };
    } catch (err) {
      throw err;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Patch('/skip/cancel/:subscriptionId')
  async cancelSkipSubscription(
    @Request() req,
    @Param('subscriptionId') subscriptionId: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    try {
      if (!req.user || !req.user.id) {
        // throw new HttpException(
        //   MESSAGES.ERR_LOGIN_REQUIRED,
        //   HttpStatus.FORBIDDEN,
        // );
      }
      await this.subscriptionUserCases.cancelSkipSubscription(
        req.user.id,
        subscriptionId,
        updateSubscriptionDto,
      );
      return {
        statusCode: HttpStatus.OK,
        message: MESSAGES.SUCCESS_TO_CANCEL_SKIP_SUBSCRIPTION,
      };
    } catch (err) {
      throw err;
    }
  }
}
