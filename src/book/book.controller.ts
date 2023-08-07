import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Inject,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { BaseService } from '../base';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto, FetchBookDto } from './dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('books')
@ApiTags('books')
export class BookController {
  @Inject(BookService)
  private readonly bookService: BookService;
  @Inject(BaseService)
  private readonly baseService: BaseService;

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The book has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'BadRequest.' })
  @ApiBody({ type: CreateBookDto })
  public async create(@Body() data: CreateBookDto) {
    const newbook = await this.bookService.create(data);
    return this.baseService.transformResponse(
      'book created successfully',
      newbook,
      HttpStatus.CREATED,
    );
  }
  @Get('/')
  public async findAll(@Query() param: FetchBookDto) {
    const { title } = param;
    const books = await this.bookService.findAll(param);
    return this.baseService.transformResponse(
      'book Fetch successfully',
      books,
      HttpStatus.OK,
    );
  }

  @Get('/:id')
  public async findOne(@Param('id') id: string) {
    const provider = await this.bookService.findOne(id);
    return this.baseService.transformResponse(
      'Book Fetch successfully',
      provider,
      HttpStatus.OK,
    );
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateProvider: UpdateBookDto,
  ) {
    const provider = await this.bookService.update(id, updateProvider);
    return this.baseService.transformResponse(
      'book Fetch successfully',
      provider,
      HttpStatus.OK,
    );
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    const removeProvider = await this.bookService.remove(id);
    return this.baseService.transformResponse(
      'book Remove successfully',
      removeProvider,
      HttpStatus.OK,
    );
  }
}
