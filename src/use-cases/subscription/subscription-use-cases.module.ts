import { Module } from '@nestjs/common';
import { DataServiceModule } from 'src/services/data-service/data-services.module';
import { SubscriptionFactoryService } from './subscription-factory.service';
import { SubscriptionUseCase } from './subscription.use-case';

@Module({
  imports: [DataServiceModule],
  providers: [SubscriptionFactoryService, SubscriptionUseCase],
  exports: [SubscriptionFactoryService, SubscriptionUseCase],
})
export class SubscriptionUseCaseModule {}
