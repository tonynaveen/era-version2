import { DatabaseService } from './../database/database.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [DatabaseService]
})
export class AuthModule {}
