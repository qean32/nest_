import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLEY_KEY } from "./role.decorator";
import { JwtService } from "@nestjs/jwt";

export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private readonly JwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const currentRoles = this.reflector.getAllAndOverride<string[]>(ROLEY_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if (!currentRoles) {
            return true
        }

        const req = context.switchToHttp().getRequest()

        const auth = req.headers.authorization
        const token = auth.split(' ')[1]
        const bearer = auth.split(' ')[0]

        if (bearer != 'Bearer' || !token) {
            return false
        }

        const user = this.JwtService.verify(token)
        return user.roles.some(role => currentRoles.includes(role.name))
    }

}