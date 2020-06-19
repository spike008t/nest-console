import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestConsoleModule } from '../../src/nest-console.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    NestConsoleModule,
    TestModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
