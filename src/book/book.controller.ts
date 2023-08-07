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
    description: 'book successfully created.',
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
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async findAll(@Query() param: FetchBookDto) {
    const books = await this.bookService.findAll(param);
    return this.baseService.transformResponse(
      'book Fetch successfully',
      books,
      HttpStatus.OK,
    );
  }

  @Get('/:id')
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async findOne(@Param('id') id: string) {
    const response = await this.bookService.findOne(id);
    return this.baseService.transformResponse(
      'Book Fetch successfully',
      response,
      HttpStatus.OK,
    );
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'book successfully updated.',
  })
  public async update(@Param('id') id: string, @Body() update: UpdateBookDto) {
    const response = await this.bookService.update(id, update);
    return this.baseService.transformResponse(
      'book Fetch successfully',
      response,
      HttpStatus.OK,
    );
  }

  @Delete('/:id')
  public async remove(@Param('id') id: string) {
    const response = await this.bookService.remove(id);
    return this.baseService.transformResponse(
      'book Remove successfully',
      response,
      HttpStatus.OK,
    );
  }
}
