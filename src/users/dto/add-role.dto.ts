import {IsNumber, IsString} from 'class-validator';
import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class AddRoleDto {
    @ApiProperty({example: 'admin', description: 'роль'})
    @Expose()
    @IsString()
    readonly value: string;

    @ApiProperty({example: 1, description: 'идентификатор пользователя'})
    @Expose()
    @IsNumber()
    readonly userId: number;
}
