import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { BookController } from './book.controller';
import { BaseService } from 'src/base';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, BookRepository, BaseService],
  exports: [BookService, BookRepository, BaseService],
})
export class BookModule {}
