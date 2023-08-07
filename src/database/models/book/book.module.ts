import { Module } from '@nestjs/common';
import { BookModel } from './book.service';

@Module({
  providers: [BookModel],
  exports: [BookModel],
})
export class DbBookModule {}
