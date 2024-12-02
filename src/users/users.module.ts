import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role, UserRoles } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles,]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
