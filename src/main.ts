import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config : ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('http.port');
  console.log(port)
  await app.listen(3000);
}
bootstrap();
