import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserUseCase } from 'src/use-cases/user/user.use-case';
//import { UsersRepository } from '../apis/subscriptions/modules/users/users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userUseCase: UserUseCase) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    });
  }

  async validate(payload: any) {
    try {
      const user = await this.userUseCase.getUser(payload.userId);
      return user;
    } catch (err) {
      throw new HttpException(`${err}`, HttpStatus.FORBIDDEN);
    }
  }
}
