import { Injectable } from '@nestjs/common';
import { CreateEnemyDto } from './dto/create-enemy.dto';
import { UpdateEnemyDto } from './dto/update-enemy.dto';
import { Enemy } from './entities/enemy.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EnemyService {
  constructor(@InjectModel(Enemy) private readonly EnemyRepository: typeof Enemy) { }

  async create(createEnemyDto: CreateEnemyDto) {
    const enemy = await this.EnemyRepository.create(createEnemyDto)
    return enemy
  }

  async findAll() {
    const enemes = await this.EnemyRepository.findAll()
    return enemes
  }

  async findOne(id: number) {
    const enemy = await this.EnemyRepository.findByPk(id)
  }

  async update(id: number, updateEnemyDto: UpdateEnemyDto) {
    const enemy = await this.EnemyRepository.findByPk(id)
    enemy.update(updateEnemyDto)
    return enemy
  }

  async remove(id: number) {
    const destroy = await this.EnemyRepository.destroy({ where: { id } })
    return destroy
  }
}
