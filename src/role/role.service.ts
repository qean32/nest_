import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role) private readonly RoleRepository: typeof Role) { }

    async getByName(name: string) {
        const role = await this.RoleRepository.findOne({ where: { name } })
        return role
    }
}
