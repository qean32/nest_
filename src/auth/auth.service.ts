import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }

  async regisatration(createUserDto: CreateUserDto) {
    const user_ = await this.userService.getUserByEmail(createUserDto.email)
    if (user_) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 5)
    const user = await this.userService.create({ ...createUserDto, password: hashPassword })

    return this.generateToken(user)
  }

  async login(authDto: AuthDto) {
    const user = await this.userService.getUserByEmail(authDto.email)
    if (user && await bcrypt.compare(authDto.password, user.password)) {
      return this.generateToken(user)
    }

    throw new HttpException('no', HttpStatus.BAD_REQUEST)
  }

  async generateToken({ email, id, roles }: User) {
    return this.jwtService.sign({ email, id, roles })
  }
}
