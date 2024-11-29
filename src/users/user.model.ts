import { Injectable } from "@nestjs/common";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role, UserRoles } from "src/roles/roles.model";

interface UserInterface {
    email: string
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @Column({ type: DataType.STRING })
    first_name: string

    @Column({ type: DataType.STRING })
    last_name: string

    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    ban: boolean

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}