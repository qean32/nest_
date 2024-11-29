import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(private readonly UserService: UsersService, private jwtService: JwtService) { }

    async registration(body) {
        // const condidate = this.UserService.getUserByEmail(body.email)

        // if (condidate) {
        //     throw new HttpException('no', HttpStatus.BAD_REQUEST)
        // }

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

    async login(body) {

    }
}
