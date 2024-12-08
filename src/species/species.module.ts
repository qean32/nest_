import { Module } from '@nestjs/common';
import { Species } from './entities/species.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [],
  providers: [],
  exports: [
    // Species,
  ],
  imports: [
    SequelizeModule.forFeature([
      Species
    ])
  ]
})
export class SpeciesModule { }
