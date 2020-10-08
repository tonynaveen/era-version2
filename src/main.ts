import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as session from 'express-session';
import * as razorpay from 'razorpay';
  import { from } from 'rxjs';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use(
    session({
      secret: 'EraHaiToMumkinHai',
      resave: true,
      saveUninitialized: false,
    }),
  );
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}
function initializeRazorPay() {
  
}
bootstrap();
