import { Module } from '@nestjs/common';
import { MysqlServiceModule } from 'src/frameworks/mysql-data.services.module';

@Module({
  imports: [MysqlServiceModule],
  exports: [MysqlServiceModule],
})
export class DataServiceModule {}
