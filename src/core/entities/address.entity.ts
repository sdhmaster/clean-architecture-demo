export class Address {
  id: number;

  user_id: number | null;

  receiver_name: string | null;

  base_address: string | null;

  detail_address: string | null;

  directions: string | null;

  type: string | null;

  phone_number: string | null;

  created_at: Date;

  updated_at: Date;

  destroyTime: Date | null;
}
