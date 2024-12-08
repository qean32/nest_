import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";
import { UserRoles } from "./role-users.entity";

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false })
    name: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
