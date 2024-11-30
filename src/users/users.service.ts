import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private RoleServive: RolesService) { }

    async create(body) {
        const user = await this.userRepository.create(body)
        const roles = await this.RoleServive.getRoleByName('user')
        await user.$set('roles', [1])
        user.roles = [roles]
        return user
    }

    async update(id, body) {
        if (body) {
            return await this.userRepository.update(body, { where: { id: id.id } })
        }
    }

    async delete(id) {
        return await this.userRepository.destroy({ where: { id: id.id } })
    }

    async getAllUser() {
        const users = await this.userRepository.findAll({ include: { all: true } })
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email } })
        return user
    }
}
