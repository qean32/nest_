import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'species' })
export class Species extends Model {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING })
    name: string
}
