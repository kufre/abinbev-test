import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base';
import { BookModel } from '../database/models/book';

@Injectable()
export class BookRepository extends BaseRepository {
  constructor() {
    super(BookModel);
  }
}
