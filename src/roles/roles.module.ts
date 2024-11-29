import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role, UserRoles } from './roles.model';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([
      Role,
      User,
      UserRoles,
      
    ])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule { }
