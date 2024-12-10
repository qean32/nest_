import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { RoleService } from 'src/role/role.service';
import { ROLE_NAME } from 'src/exports';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User, private readonly RoleService: RoleService, private readonly fileService: FilesService) { }

  async create(createUserDto: CreateUserDto, ava: any) {
    const fileName = await this.fileService.createFile(ava)
    const user = await this.userRepository.create({ ...createUserDto })
    const role = await this.RoleService.getByName(ROLE_NAME.USER)
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
