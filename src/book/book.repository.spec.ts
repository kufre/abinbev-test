import { Test, TestingModule } from '@nestjs/testing';
import { BaseRepository } from '../base';
import { BookRepository } from './book.repository';

describe('BookRepository', () => {
  let bookRepo: BookRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookRepository],
    }).compile();

    bookRepo = module.get<BookRepository>(BookRepository);
  });

  it('should be defined', () => {
    expect(bookRepo).toBeDefined();
  });

  it('should extend BaseRepository', () => {
    expect(bookRepo instanceof BaseRepository).toBeTruthy();
  });
});
