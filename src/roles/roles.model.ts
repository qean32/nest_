import { BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";

@Table({ tableName: 'roles', createdAt: false, updatedAt: false })
export class Role extends Model {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING, unique: true })
    name: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: User[]
}

@Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true })
    id: number

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number
}