import {
    ExecutionContext,
    ForbiddenException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "../roles-auth.decorator";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
    ) {
        super()
    }

    handleRequest(err, user, info: Error, context: ExecutionContext) {
        if (err || info) {
            throw info
        }

        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles || !user.roles.some(role => requiredRoles.includes(role.value))) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
        }

        return user;
    }
}
