import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EnvironmentService } from './configs';

class Server {
  public static async start(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    Server.mountMiddlewares(app);
    Server.swaggerSetup(app);
    await app.listen(EnvironmentService.getValue('PORT'), '0.0.0.0');
    console.log(
      `Book Api is running on  ${EnvironmentService.getValue('PORT')}`,
    );
  }

  private static swaggerSetup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Book Service APIs (Test project)')
      .setDescription('The Book API Documentation')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);
  }

  private static mountMiddlewares(app: INestApplication): void {
    app.useGlobalPipes(new ValidationPipe());
  }
}

Server.start().then();
