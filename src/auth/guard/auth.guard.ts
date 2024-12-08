import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
    constructor(private readonly JwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        const auth = req.headers.authorization

        const bearer = auth.split(' ')[0]
        const token = auth.split(' ')[1]

        if (bearer != 'Bearer' || !token) {
            return false
        }

        const user = this.JwtService.verify(token)
        if (user) {
            return true
        }

        return false
    }

}