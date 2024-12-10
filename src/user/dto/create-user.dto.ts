import { IsEmail, IsString, Length, Matches } from "class-validator"

export class CreateUserDto {
    // @IsString()
    // @IsEmail()
    email: string
    // @IsString()
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    // @Length(4, 16)
    password: string
    ava: any
}
