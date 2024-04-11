import { NestFactory } from '@nestjs/core';
import { RatesModule } from './rates.module';

async function bootstrap() {
  const app = await NestFactory.create(RatesModule);
  await app.listen(3000);
}
bootstrap();
