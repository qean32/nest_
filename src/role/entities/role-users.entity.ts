import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";
import { Role } from "./role.entity";

@Table({ tableName: 'role-users' })
export class UserRoles extends Model<UserRoles> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    user: number

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    role: number
}
