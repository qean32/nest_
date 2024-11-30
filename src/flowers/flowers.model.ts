import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";

@Table({ tableName: 'flowers' })
export class Flower extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true })
    id: number

    @Column({ type: DataType.STRING })
    name: string

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    user: number
}