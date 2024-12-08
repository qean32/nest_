import { Module } from '@nestjs/common';
import { EnemyService } from './enemy.service';
import { EnemyController } from './enemy.controller';
import { Species } from 'src/species/entities/species.entity';
import { SpeciesModule } from 'src/species/species.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Enemy } from './entities/enemy.entity';

@Module({
  controllers: [EnemyController],
  providers: [EnemyService],
  imports: [
    SequelizeModule.forFeature([
      Enemy
    ])
  ]
})
export class EnemyModule { }
