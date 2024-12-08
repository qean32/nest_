import { IsString } from "class-validator"

export class CreateEnemyDto {
    @IsString({ message: 'noOOOO' })
    readonly name: string
    readonly health: number
    readonly species: number
}
