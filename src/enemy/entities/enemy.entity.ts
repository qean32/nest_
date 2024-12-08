import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Species } from "src/species/entities/species.entity";

@Table({ tableName: 'enemes' })
export class Enemy extends Model<Enemy> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number

    @ForeignKey(() => Species)
    @Column({ type: DataType.INTEGER })
    species: number

    @Column({ type: DataType.STRING })
    name: string

    @Column({ type: DataType.INTEGER })
    health: number
}