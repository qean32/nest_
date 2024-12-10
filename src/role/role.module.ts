import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/entities/user.entity';
import { UserRoles } from './entities/role-users.entity';
import { Role } from './entities/role.entity';

@Module({
  controllers: [],
  providers: [RoleService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RoleService
  ]
})
export class RoleModule { }
