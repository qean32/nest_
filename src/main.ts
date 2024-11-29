import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
    const PORT = process.env.PORT || 5002
    const app = await NestFactory.create(AppModule)

    app.setGlobalPrefix('api')
    await app.listen(PORT, () => console.log(`server stare by port ${PORT}`))
}

start()