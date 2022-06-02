export class User {
  id: number;

  email: string | null;

  password: string | null;

  nickname: string | null;

  name: string | null;

  phone: string | null;

  birthday: Date;

  sex: string | null;

  funnel: string | null;

  recommended_by: string | null;

  event_sms_agree: number | null;

  event_email_agree: number | null;

  points: number | null;

  exp: number | null;

  level: number | null;

  refresh_token: string | null;

  customer_uid: string | null;

  social_customer_uid: string | null;

  pw_reset_code: string | null;

  pw_expire_time: Date | null;

  di: string | null;

  ci: string | null;

  kakao_token: string | null;

  naver_token: string | null;

  google_token: string | null;

  facebook_token: string | null;

  firebase_token: string | null;

  apple_token: string | null;

  subscription_tmp: string | null;

  created_at: Date;

  updated_at: Date;

  destroyTime: Date | null;

  pw_reset: number | null;
}
