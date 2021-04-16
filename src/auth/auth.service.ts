import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import {User} from '../users/users.model';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        
        if (candidate) {
            throw new HttpException('user is exists', HttpStatus.BAD_REQUEST);
        }
        
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user);
    }

    public async generateToken(user: User) {
        return {
            token: this.jwtService.sign({
                email: user.email, 
                id: user.id, 
                roles: user.roles
            })
        }
    }

    public async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);

        if (!user || !await bcrypt.compare(userDto.password, user.password)) {
            throw new UnauthorizedException({message: 'invalid email or password'})
        }

        return user;
    }
}
