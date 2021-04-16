import {registerAs} from '@nestjs/config';
import {User} from '../users/users.model';
import {Role} from '../roles/roles.model';
import {UserRoles} from '../roles/user-roles.model';

export const app = registerAs('app', () => ({
    port: process.env.APP_PORT,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    jwt_secret_expires: process.env.JWT_SECRET_EXPIRES
}));

export const db = registerAs('db', () => ({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User, Role, UserRoles],
    autoLoadModels: true
}));