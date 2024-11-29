import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private RoleRepo: typeof Role) { }

    async getRoleByName(name) {
        const role = await this.RoleRepo.findOne({ where: { name } })
        return role.dataValues
    }
}
