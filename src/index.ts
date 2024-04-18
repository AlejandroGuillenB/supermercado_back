import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest Worshop')
    .setDescription('Nest Worshop')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(
    cors({
      origin: 'https://supermercado-front.vercel.app',
      credentials: true,
    })
  );
  await app.listen(4000);
}
void bootstrap();
