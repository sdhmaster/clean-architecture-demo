import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('subscription_plans', { schema: 'sooldamhwa' })
export class SubscriptionPlanModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'code_name', nullable: true, length: 255 })
  code_name: string | null;

  @Column('int', { name: 'monthly_price', nullable: true })
  monthly_price: number | null;

  @Column('int', { name: 'total_price', nullable: true })
  total_price: number | null;

  @Column('int', { name: 'period', nullable: true })
  period: number | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  destroyTime: Date | null;
}
