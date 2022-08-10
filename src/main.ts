import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BSL-WEEK14-NESTJS-PART2')
    .setDescription('Tasks of the module')
    .setVersion('1.0')
    .addTag('task 4')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(PORT);
}
bootstrap();
