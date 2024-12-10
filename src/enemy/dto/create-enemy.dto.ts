import { IsInt, IsString } from "class-validator"

export class CreateEnemyDto {
    @IsString()
    readonly name: string
    @IsInt()
    readonly health: number
    @IsInt()
    readonly species: number
}
