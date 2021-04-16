import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './guards/local-auth.guard';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req, @Body() dto: CreateUserDto) {
        return this.authService.generateToken(req.user)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
