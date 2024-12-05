import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'должно быть строкой' })
    readonly email: string
    readonly password: string;
    dataValues: any
}