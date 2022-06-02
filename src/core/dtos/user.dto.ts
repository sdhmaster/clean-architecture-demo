import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  nickname: string;
  name: string;
  phone: string;
  birthday: Date;
  sex: string;
  funnel: string;
  recommendedBy: string;
  eventSmsAgree: number;
  eventEmailAgree: number;
  points: number;
  exp: number;
  level: number;
  refreshToken: string;
  customerUid: string;
  socialCustomerUid: string;
  pwResetCode: string;
  pwExpireTime: Date;
  di: string;
  ci: string;
  kakaoToken: string;
  naverToken: string;
  googleToken: string;
  facebookToken: string;
  firebaseToken: string;
  appleToken: string;
  subscriptionTmp: string;
  subscriptionExperience: string;
  pwReset;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
