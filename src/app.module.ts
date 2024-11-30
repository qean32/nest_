import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { User } from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import { Role, UserRoles } from "./roles/roles.model";
import { AuthModule } from './auth/auth.module';
import { FlowersModule } from './flowers/flowers.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'test_',
            models: [
                User,
                Role,
                UserRoles,
                
            ],
            autoLoadModels: true
        }),
        RolesModule,
        UsersModule,
        AuthModule,
        FlowersModule,
    ]
})
export class AppModule { }