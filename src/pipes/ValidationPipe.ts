import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exception/validationException";

export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToClass(metadata.metatype, value)
        const errors = await validate(obj)
        console.log('zxcxxxxxxxxxxx')

        if (errors.length) {
            const errors_ = errors.map(err => `${err.property} - ${Object.values(err.constraints).join(', ')}`)


            // throw new ValidationException(errors_);
        }

        return value
    }

}