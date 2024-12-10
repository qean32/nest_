import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        console.log(file)
        try {
            const fileName = Math.floor(Math.random() * 100000000).toString() + '.webp'
            const filePath = path.resolve(__dirname, '..', 'static')

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        }
        catch {
            throw new HttpException('no', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
