import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe({
        transformOptions: {
            excludeExtraneousValues: true
        }
    }));

    const configService: ConfigService = app.get('ConfigService');
    await app.listen(configService.get<number>('app.port'));

    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap()
