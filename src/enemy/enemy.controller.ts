import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { EnemyService } from './enemy.service';
import { CreateEnemyDto } from './dto/create-enemy.dto';
import { UpdateEnemyDto } from './dto/update-enemy.dto';
import { ValidationPipe } from 'src/pipes/ValidationPipe';

@Controller('enemy')
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) { }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body(new ValidationPipe()) CreateEnemyDto: CreateEnemyDto) {
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
