import { Module } from '@nestjs/common';
import { Subscription } from 'rxjs';
import { SubscriptionsController } from './controllers';
import { AppController } from './controllers/app.controller';
import { DataServiceModule } from './services/data-service/data-services.module';
import { SubscriptionUseCase } from './use-cases/subscription/subscription.use-case';
import { UserUseCase } from './use-cases/user/user.use-case';

@Module({
  imports: [
    DataServiceModule,
    SubscriptionUseCase,
    UserUseCase,
    SubscriptionUseCase,
  ],
  controllers: [AppController, SubscriptionsController],
  providers: [],
})
export class AppModule {}
