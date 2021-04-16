import {Expose} from 'class-transformer';
import {IsInt, IsNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: 1, description: 'идентификатор пользователя'})
    @Expose()
    @IsInt()
    readonly userId: number;

    @ApiProperty({example: 'хулиганство', description: 'причина'})
    @Expose()
    @IsString()
    readonly banReason: string;
}
