import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AddressModel } from './address.model';
import { UserModel } from './user.model';

@Entity('subscriptions', { schema: 'sooldamhwa' })
export class SubscriptionModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  user_id: number;

  @Column('int')
  subscription_plan_id: number;

  @Column('int')
  address_id: number;

  @Column('int')
  amount: number;

  @Column('int')
  price: number;

  @Column('varchar', { length: 45 })
  status: string;

  @Column('varchar', { nullable: true, length: 255 })
  event_code: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  destroyTime: Date | null;

  @ManyToOne(() => AddressModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address: AddressModel;

  @ManyToOne(() => UserModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserModel;
}
