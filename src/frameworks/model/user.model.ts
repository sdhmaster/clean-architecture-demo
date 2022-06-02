import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users', { schema: 'sooldamhwa' })
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  password: string | null;

  @Column('varchar', { name: 'nickname', nullable: true, length: 255 })
  nickname: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 255 })
  phone: string | null;

  @Column('datetime', { name: 'birthday' })
  birthday: Date;

  @Column('varchar', { name: 'sex', nullable: true, length: 255 })
  sex: string | null;

  @Column('varchar', { name: 'funnel', nullable: true, length: 255 })
  funnel: string | null;

  @Column('varchar', { name: 'recommended_by', nullable: true, length: 255 })
  recommended_by: string | null;

  @Column('int', { name: 'event_sms_agree', nullable: true })
  event_sms_agree: number | null;

  @Column('int', { name: 'event_email_agree', nullable: true })
  event_email_agree: number | null;

  @Column('int', { name: 'points', nullable: true })
  points: number | null;

  @Column('int', { name: 'exp', nullable: true })
  exp: number | null;

  @Column('int', { name: 'level', nullable: true })
  level: number | null;

  @Column('varchar', { name: 'refresh_token', nullable: true, length: 255 })
  refresh_token: string | null;

  @Column('varchar', { name: 'customer_uid', nullable: true, length: 255 })
  customer_uid: string | null;

  @Column('varchar', {
    name: 'social_customer_uid',
    nullable: true,
    length: 255,
  })
  social_customer_uid: string | null;

  @Column('varchar', { name: 'pw_reset_code', nullable: true, length: 255 })
  pw_reset_code: string | null;

  @Column('datetime', { name: 'pw_expire_time', nullable: true })
  pw_expire_time: Date | null;

  @Column('varchar', { name: 'di', nullable: true, length: 64 })
  di: string | null;

  @Column('varchar', { name: 'ci', nullable: true, length: 88 })
  ci: string | null;

  @Column('varchar', { name: 'kakao_token', nullable: true, length: 255 })
  kakao_token: string | null;

  @Column('varchar', { name: 'naver_token', nullable: true, length: 255 })
  naver_token: string | null;

  @Column('varchar', { name: 'google_token', nullable: true, length: 255 })
  google_token: string | null;

  @Column('varchar', { name: 'facebook_token', nullable: true, length: 255 })
  facebook_token: string | null;

  @Column('varchar', { name: 'firebase_token', nullable: true, length: 255 })
  firebase_token: string | null;

  @Column('varchar', { name: 'apple_token', nullable: true, length: 255 })
  apple_token: string | null;

  @Column('varchar', { name: 'subscription_tmp', nullable: true, length: 45 })
  subscription_tmp: string | null;

  @Column('datetime', { name: 'created_at' })
  created_at: Date;

  @Column('datetime', { name: 'updated_at' })
  updated_at: Date;

  @Column('datetime', { name: 'destroyTime', nullable: true })
  destroyTime: Date | null;

  @Column('varchar', {
    name: 'subscription_experience',
    nullable: true,
    length: 45,
  })
  subscriptionExperience: string | null;

  @Column('int', { name: 'pw_reset', nullable: true })
  pw_reset: number | null;
}
