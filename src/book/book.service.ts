import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { CreateBookDto, UpdateBookDto, FetchBookDto } from './dto';
import { BookRepository } from './book.repository';
@Injectable()
export class BookService {
  @Inject(BookRepository)
  private readonly bookRepo: BookRepository;

  public async create(createBook: CreateBookDto) {
    await this.throwIfBookExists(createBook);
    return this.bookRepo.create(createBook);
  }

  findAll(fetch: FetchBookDto) {
    let providers: any;
    try {
      providers = this.bookRepo.findAll(fetch);
    } catch (e) {
      throw new InternalServerErrorException(
        `Error Fetch Currency: ${e.message}`,
      );
    }
    return providers;
  }

  public async findOne(id: string) {
    let providers: any;
    try {
      providers = await this.bookRepo.findById(id);
    } catch (e) {
      throw new InternalServerErrorException(
        `Error Fetch Currency: ${e.message}`,
      );
    }
    return providers;
  }

  public async update(id: string, updateProviderDto: UpdateBookDto) {
    let providers: any;
    try {
      providers = await this.bookRepo.update(id, updateProviderDto);
    } catch (e) {
      throw new InternalServerErrorException(
        `Error Updating Provider: ${e.message}`,
      );
    }
    return providers;
  }

  public async remove(id: string) {
    let providers: any;
    try {
      providers = await this.bookRepo.delete(id);
    } catch (e) {
      throw new InternalServerErrorException(
        `Error Delete Provider: ${e.message}`,
      );
    }
    return providers;
  }

  private async throwIfBookExists(data: CreateBookDto): Promise<void> {
    let existingProvider;
    if (data.title) {
      existingProvider = await this.bookRepo.findOne({
        title: data.title,
      });
    }
    if (existingProvider) {
      throw new ConflictException('Book already exists');
    }
  }
}
