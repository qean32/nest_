import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role, UserRoles } from './roles.model';
import { User } from 'src/users/user.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([
      Role,
      User,
      UserRoles,
      
    ])
  ]
})
export class RolesModule { }
