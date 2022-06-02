import { Module } from '@nestjs/common';
import { DataServiceModule } from 'src/services/data-service/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { UserUseCase } from './user.use-case';

@Module({
  imports: [DataServiceModule],
  providers: [UserFactoryService, UserUseCase],
  exports: [UserFactoryService, UserUseCase],
})
export class UserUseCaseModule {}
