import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Flower } from './flowers.model';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService],
  imports: [
    SequelizeModule.forFeature([
      Flower
      
    ])
  ]
})
export class FlowersModule { }
