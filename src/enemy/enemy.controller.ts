import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnemyService } from './enemy.service';
import { CreateEnemyDto } from './dto/create-enemy.dto';
import { UpdateEnemyDto } from './dto/update-enemy.dto';

@Controller('enemy')
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) { }

  @Post()
  create(@Body() CreateEnemyDto: CreateEnemyDto) {
    return this.enemyService.create(CreateEnemyDto);
  }

  @Get()
  findAll() {
    return this.enemyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enemyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnemyDto: UpdateEnemyDto) {
    return this.enemyService.update(+id, updateEnemyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enemyService.remove(+id);
  }
}
