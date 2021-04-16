import {Expose} from 'class-transformer';
import {IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({example: 'admin', description: 'администратор'})
    @Expose()
    @IsString()
    readonly value: string;

    @ApiProperty({example: 'admin', description: 'администратор'})
    @Expose()
    @IsString()
    readonly description: string;
}
