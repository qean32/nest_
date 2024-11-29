import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async createUser(body) {
        const user = await this.userRepository.create(body)
        return user
    }

    async getAllUser() {
        const users = await this.userRepository.findAll()
        return users
    }
}
