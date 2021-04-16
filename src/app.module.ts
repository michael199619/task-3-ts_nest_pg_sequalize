import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import {AppConfigModule} from './config/config.module';
import {SeedService} from "./db/seed.service";

@Module({
    imports: [
        AppConfigModule,
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => configService.get('db')
        }),
        UsersModule,
        RolesModule,
        AuthModule
    ],
    providers: [SeedService]
})
export class AppModule {}
