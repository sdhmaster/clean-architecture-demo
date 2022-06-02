import { Module } from '@nestjs/common';
import { DataServiceModule } from 'src/services/data-service/data-services.module';
import { SubscriptionPlanFactoryService } from './subscriptionPlan-factory.service';
import { SubscriptionPlanUseCase } from './subscriptionPlan.use-case';

@Module({
  imports: [DataServiceModule],
  providers: [SubscriptionPlanFactoryService, SubscriptionPlanUseCase],
  exports: [SubscriptionPlanFactoryService, SubscriptionPlanUseCase],
})
export class SubscriptionPlanUseCaseModule {}
