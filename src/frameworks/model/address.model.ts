import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SubscriptionModel } from './subscription.model';

@Entity('addresses', { schema: 'sooldamhwa' })
export class AddressModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  user_id: number | null;

  @Column('varchar', { name: 'receiver_name', nullable: true, length: 255 })
  receiver_name: string | null;

  @Column('varchar', { name: 'base_address', nullable: true, length: 255 })
  base_address: string | null;

  @Column('varchar', { name: 'detail_address', nullable: true, length: 255 })
  detail_address: string | null;

  @Column('varchar', { name: 'zipcode', nullable: true, length: 255 })
  zipcode: string | null;

  @Column('varchar', { name: 'directions', nullable: true, length: 255 })
  directions: string | null;

  @Column('varchar', { name: 'type', nullable: true, length: 255 })
  type: string | null;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 255 })
  phone_number: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  destroyTime: Date | null;

  @OneToMany(
    () => SubscriptionModel,
    (SubscriptionModel) => SubscriptionModel.address_id,
  )
  SubscriptionEntity: SubscriptionModel[];
}
