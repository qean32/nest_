import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { RoleService } from 'src/role/role.service';
import { RoleName } from 'src/exports';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User, private readonly RoleService: RoleService) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto)
    const role = await this.RoleService.getByName(RoleName.ROLE_USER)
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async findOne(id: number) {
    const user = await this.userRepository.findByPk(id)
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findByPk(id)
    user.update(updateUserDto)
    return user
  }

  async remove(id: number) {
    const user = await this.userRepository.findByPk(id)
    user.destroy()
    return user
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
    return user
  }
}
