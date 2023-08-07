import { Test, TestingModule } from '@nestjs/testing';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService, BookRepository],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
