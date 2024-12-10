import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SpeciesModule } from './species/species.module';
import { EnemyModule } from './enemy/enemy.module';
import { Species } from './species/entities/species.entity';
import { Enemy } from './enemy/entities/enemy.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { User } from './user/entities/user.entity';
import { Role } from './role/entities/role.entity';
import { UserRoles } from './role/entities/role-users.entity';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rpgdream',
      models: [
        Species,
        Enemy,
        User,
        Role,
        UserRoles,
      ],
      autoLoadModels: true
    }),
    EnemyModule,
    SpeciesModule,
    UserModule,
    AuthModule,
    RoleModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
