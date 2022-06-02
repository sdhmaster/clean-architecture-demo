export class SubscriptionPlan {
  id: number;

  name: string | null;

  code_name: string | null;

  monthly_price: number | null;

  total_price: number | null;

  period: number | null;
  created_at: Date;
  updated_at: Date;

  destroyTime: Date | null;
}
