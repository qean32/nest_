import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly UserService: UsersService, private jwtService: JwtService) { }

    async registration(body) {
        const condidate = await this.UserService.getUserByEmail(body.email)
        if (condidate) {
            throw new HttpException('no', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(body.password, 5)
        const user = await this.UserService.create({ ...body, password: hashPassword })
        return this.generateToken(user)
    }

    async generateToken(user) {
        const payload = { email: user.email, id: user.id, roles: user.roles }
        return {
            token: this.jwtService.sign({ payload })
        }
    }

    async validateUser(user: CreateUserDto) {
        const user_ = await this.UserService.getUserByEmail(user.email)
        const currnent = await bcrypt.compare(user.password, user_.password)

        console.log(user_.dataValues.id)
        console.log(user_.dataValues.roles.Role)

        if (user && currnent) {
            return user
        }

        throw new UnauthorizedException({ message: 'no email or password' })
    }

    async login(body: CreateUserDto) {
        const user = await this.validateUser(body)
        console.log(user)
        return this.generateToken(user)
    }
}
