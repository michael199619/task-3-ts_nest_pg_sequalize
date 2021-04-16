import {Injectable} from '@nestjs/common';
import {RolesService} from '../roles/roles.service';
import {UsersService} from '../users/users.service';
import fixtures from './fixtures';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class SeedService {
    constructor(
        private roleService: RolesService,
        private userService: UsersService,
        private authService: AuthService
    ) {}

    async onModuleInit() {
        console.log('[Seed started]');

        if ((await this.userService.getAllUsers()).length) {
            console.log('[Seed success]');
            return false;
        }

        console.log('[Creating User role]');

        await this.roleService.createRole(fixtures.role);

        console.log('[Creating Role success]');

        console.log('[Creating User started]');

        await this.authService.registration(fixtures.user);

        console.log('[Creating User success]');

        console.log('[Seed success]');
    }
}
