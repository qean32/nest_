import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UserRoles } from 'src/role/entities/role-users.entity';
import { Role } from 'src/role/entities/role.entity';
import { User } from './entities/user.entity';
import { RoleModule } from 'src/role/role.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RoleModule,
    forwardRef(() => AuthModule),
    FilesModule
  ],
  exports: [
    UserService,
  ]
})
export class UserModule { }
