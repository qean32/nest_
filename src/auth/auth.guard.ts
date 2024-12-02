import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        const authHeader = req.headers.authorization || false

        if (!authHeader) {
            throw new UnauthorizedException({ mess: 'no' })
        }

        const bearer = authHeader.split(' ')[0]
        const token = authHeader.split(' ')[1]

        if (bearer != 'Bearer') {
            throw new UnauthorizedException({ mess: 'no' })
        }

        const user = this.jwtService.verify(token)
        req.user = user
        return true
    }

}