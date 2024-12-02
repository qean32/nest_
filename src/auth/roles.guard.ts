import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./rolesa-auth.decoarator";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        const reqRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if (!reqRoles) {
            return true
        }

        const authHeader = req.headers.authorization || false

        if (!authHeader) {
            throw new UnauthorizedException({ mess: 'no' })
        }

        const bearer = authHeader.split(' ')[0]
        const token = authHeader.split(' ')[1]

        if (bearer != 'Bearer') {
            throw new UnauthorizedException({ mess: 'no' })
        }

        const user = this.jwtService.decode(token)
        return user.payload.roles.some(role => reqRoles.includes(role.name))
    }

}