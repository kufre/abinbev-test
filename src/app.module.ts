import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { ConfigsModule } from './configs';
import { BaseModule } from './base';
import { BookModule } from './book';

@Module({
  imports: [DatabaseModule, ConfigsModule, BaseModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
