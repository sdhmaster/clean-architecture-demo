/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from 'src/core/dtos/subscription.dto';
import { SubscriptionFactoryService } from './subscription-factory.service';
import Debug from 'debug';
import { UserUseCase } from '../user/user.use-case';
import { Subscription } from 'src/core/entities';
import { CONSTANTS } from 'src/configuration/constants';
import { UpdateUserDto } from 'src/core/dtos/user.dto';
import { SubscriptionPlanUseCase } from '../subscriptionPlan/subscriptionPlan.use-case';
const debug = Debug('sooldamhwa: subscription');
//const debug = Debug('sooldamhwa: subscription');

@Injectable()
export class SubscriptionUseCase {
  constructor(
    private dataService: IDataServices,
    private subscriptionFactoryService: SubscriptionFactoryService,
    private userUseCases: UserUseCase,
    private subscriptionPlanUseCase: SubscriptionPlanUseCase,
  ) {}

  async createSubscription(
    userId,
    createSubscriptionDto: CreateSubscriptionDto,
  ) {
    try {
      //let user = await this.userRepository.findUserById(userId);
      let user = await this.dataService.user.findOne({ user_id: userId });

      const { impUid } = createSubscriptionDto || null;
      const iamPortPaymentData = { buyer_tel: '', custom_data: '' }; // await this.iamportUtils.getPaymentByImpUid(impUid);
      if (iamPortPaymentData) {
        debug('iamPortPaymentData: ', iamPortPaymentData);

        /******************************/
        //user = await this.userRepository.findUserByPhone(iamPortPaymentData.buyer_tel);
        /******************************/
        user = await this.dataService.user.findOne({
          phone: iamPortPaymentData.buyer_tel,
        });
        //createSubscriptionDto.custom_data = iamPortPaymentData.custom_data; ?????
      }

      if (!user) {
        // throw new HttpException(
        //   MESSAGES.ERR_NOT_FOUND_USER,
        //   HttpStatus.NOT_FOUND,
        // );
      }

      /******************************/
      //   const subscriptionList =
      //   await this.subscriptionRepository.getSubscriptionListByUserPlanAndAddress(
      //     user.id,
      //     subscription_plan_id,
      //     address_id,
      //   );
      /******************************/

      const { subscription_plan_id, address_id } = createSubscriptionDto;
      const subscriptionList = await this.dataService.subscription.findMany(
        [''],
        {
          user_id: user.id,
          subscription_plan_id,
          address_id,
        },
      );
      const duplicateSubscription = subscriptionList.filter(
        (subscription) => subscription.status === 'SUBSCRIBING', // CONSTANTS.STATUS.SUBSCRIBING,
      );
      debug('duplicate supscription: ', duplicateSubscription);
      if (duplicateSubscription && duplicateSubscription.length > 0) {
        //throw new HttpException(MESSAGES.ERR_DUPLICATE_SUBSCRIPTION, HttpStatus.BAD_REQUEST);
      }

      /*****
  
        const subscriptionPlan = await this.subscriptionPlanRepository.getSubscriptionPlan(
          subscription_plan_id,
        );

        
        *****/

      const subscriptionPlan =
        await this.subscriptionPlanUseCase.getSubscriptionPlan(
          subscription_plan_id,
        );
      if (!subscriptionPlan || !subscriptionPlan.monthly_price) {
        // throw new HttpException(
        //   MESSAGES.ERR_NOT_FOUND_SUBSCRIPTION_PLAN,
        //   HttpStatus.NOT_FOUND,
        // );
      }

      /*
        customer uid 업데이트
        - 소셜 결제: 기존 customer_uid 와 다를 경우 social_customer_uid 에 입력받은 customer_uid 추가
        - 신용카드 결제: customer_uid 가 없을 경우 생성하여 추가
        */

      const customer_uid = createSubscriptionDto.customer_uid;

      const updateUserDto: UpdateUserDto = {
        customerUid: customer_uid,
        id: user.id,
      };
      /******************************/
      //await this.userRepository.updateCustomerUids(customer_uid, user.id, queryRunner.manager);
      /******************************/

      await this.userUseCases.updateUser(updateUserDto);

      /******************************/
      // createSubscriptionDto.user_id = user.id;
      // createSubscriptionDto.price = subscriptionPlan.monthly_price * createSubscriptionDto.amount;
      // createSubscriptionDto.status = CONSTANTS.STATUS.SUBSCRIBING;
      // createSubscriptionDto.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
      // createSubscriptionDto.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

      // const subscription = await this.subscriptionRepository.createSubscription(
      //   createSubscriptionDto,
      //   queryRunner.manager,
      // );
      /******************************/

      const monthlyPrice =
        subscriptionPlan.monthly_price * createSubscriptionDto.amount;
      const status = CONSTANTS.STATUS.SUBSCRIBING;
      const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
      const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

      const subscriptionEntity: Subscription =
        this.subscriptionFactoryService.createSubscription(
          user.id,
          monthlyPrice,
          status,
          createdAt,
          updatedAt,
          createSubscriptionDto,
        );
      const subscription =
        this.dataService.subscription.create(subscriptionEntity);

      debug('subscription: ', subscription);

      //const subscriptionAddress = await this.addressRepository.getAddress(subscription.address_id);

      const subscriptionAddress = await this.dataService.address.findOne({
        id: subscription.address_id,
      });

      if (!subscriptionAddress) {
        //throw new HttpException(MESSAGES.ERR_SERVER, HttpStatus.INTERNAL_SERVER_ERROR);
      }
      subscriptionAddress.directions = createSubscriptionDto.directions;

      /*****
        const subscriptionSchedule =
          await this.subscriptionScheduleRepository.getSubscriptionScheduleByStatus(
            subscription_plan_id,
            CONSTANTS.SCHEDULE_STATUS.NOW,
          );
        if (!subscriptionSchedule) {
          //throw new HttpException(MESSAGES.ERR_NOT_FOUND_SUBSCRIPTION_SCHEDULE, HttpStatus.NOT_FOUND);
        }
  
        const subscriptionOrder = await this.subscriptionOrderRepository.createSubscriptionOrder(
          subscription,
          subscriptionSchedule,
          subscriptionAddress,
          queryRunner.manager,
        );


****/

      //debug('subscriptionOrder: ', subscriptionOrder);

      // await this.iamportUtils.schedule(user, subscriptionOrder, subscriptionSchedule, impUid);
      // await queryRunner.commitTransaction();

      // const userName = user.name;
      // const userPhone = user.phone;
      // const { amount, price } = subscriptionOrder;
      // const plan = subscriptionSchedule.subscription_plan?.name;
      // const billingDate = moment(subscriptionSchedule.billing_date).format('YYYY년 MM월 DD일');
      // const shippingDate = moment(subscriptionSchedule.shipping_date).format('YYYY년 MM월 DD일');

      //const msg = stringFormat(CONSTANTS.KAKAO_TEMPLATE.START_SUBSCRIPTION.MSG, {
      //   userName,
      //   plan,
      //   billingDate,
      //   shippingDate,
      //   amount,
      //   price,
      //});
      // const tmplId = CONSTANTS.KAKAO_TEMPLATE.START_SUBSCRIPTION.CODE;
      // const buttons = CONSTANTS.KAKAO_TEMPLATE.START_SUBSCRIPTION.BUTTON;

      //await this.kakaoUtils.sendKakaoMessage(userPhone, msg, tmplId, buttons);
    } catch (err) {
      // await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // await queryRunner.release();
    }
  }

  async cancelSubscription(
    userId,
    subscriptionId,
    updateSubscriptionDto: UpdateSubscriptionDto,
  ) {}

  async skipSubscription(
    userId,
    subscriptionId,
    updateSubscriptionDto: UpdateSubscriptionDto,
  ) {}

  async cancelSkipSubscription(
    userId,
    subscriptionId,
    updateSubscriptionDto: UpdateSubscriptionDto,
  ) {}
}
