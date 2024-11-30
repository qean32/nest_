import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'flowers'})
export class Flower extends Model {
    @Column({type: DataType.INTEGER, primaryKey: true, })
}