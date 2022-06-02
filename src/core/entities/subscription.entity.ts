import { AddressModel } from 'src/frameworks/model/address.model';
import { UserModel } from 'src/frameworks/model/user.model';

export class Subscription {
  id: number;

  user_id: number;

  subscription_plan_id: number;

  address_id: number;

  amount: number;

  price: number;

  status: string;

  event_code: string | null;

  created_at: Date;

  updated_at: Date;

  destroyTime: Date | null;

  address: AddressModel;

  user: UserModel;
}
