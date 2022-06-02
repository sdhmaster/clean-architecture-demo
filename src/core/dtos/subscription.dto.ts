import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSubscriptionDto {
  @IsNumber()
  id: number;

  @IsOptional()
  user_id: number;

  @IsNumber() // not null
  subscription_plan_id: number;

  @IsNumber() // not null
  address_id: number;

  @IsNumber() // not null
  amount: number;

  @IsOptional()
  start_date: Date;

  @IsOptional()
  end_dte: Date;

  @IsOptional()
  price: number;

  @IsOptional()
  status: string;

  @IsOptional()
  @IsString()
  eventCode: string;

  @IsOptional()
  @IsString()
  delivery_comment: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  impUid: string;

  @IsOptional()
  customer_uid: string;

  @IsOptional()
  directions: string;

  created_at: string;

  updated_at: string;
}

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {}
