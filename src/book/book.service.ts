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
    const { title, edition } = fetch;
    const searchCriteria: any = {};
    if (title != null) {
      searchCriteria.title = title;
    }
    if (edition != null) {
      searchCriteria.edition = title;
    }
    let providers: any;
    try {
      providers = this.bookRepo.findMany(searchCriteria);
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

  public async update(id: string, dto: UpdateBookDto) {
    let result: any;
    console.log(dto);
    try {
      result = await this.bookRepo.update(id, dto);
    } catch (e) {
      throw new InternalServerErrorException(
        `Error Updating Provider: ${e.message}`,
      );
    }
    return result;
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
