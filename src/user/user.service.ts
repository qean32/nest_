import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto)
    user.$set('roles', [1])
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
    const user = await this.userRepository.findOne({ where: { email } })
    return user
  }
}
