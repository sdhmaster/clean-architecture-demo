import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE } from 'src/configuration/typeorm.config';
import { IDataServices } from 'src/core/abstracts';
import { MysqlDataServices } from './mysql-data-services.service';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASE)],
  providers: [
    {
      provide: IDataServices,
      useClass: MysqlDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MysqlServiceModule {}
