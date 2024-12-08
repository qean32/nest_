import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/role/entities/role-users.entity";
import { Role } from "src/role/entities/role.entity";

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @BelongsToMany(() => User, () => UserRoles)
    roles: Role[]
}
