import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'sooldamhwa-staging.cfha30nsqajt.ap-northeast-2.rds.amazonaws.com',
        port: 3306,
        username: 'sooldamhwa',
        password: '5001Damhwa313!!',
        database: 'sooldamhwa',
        entities: ['/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
