import { Test, TestingModule } from '@nestjs/testing';
import { BaseService } from '../base';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

describe('BookController', () => {
  let controller: BookController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BaseService, BookService, BookRepository],
    }).compile();
    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
