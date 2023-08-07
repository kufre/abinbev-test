import { JSONSchema } from 'objection';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IBook } from './book.interface';
import { BookValidation } from './book.validation';

export class BookModel extends BaseModel implements IBook {
  public id: IBook['id'];
  public title: IBook['title'];
  public edition: IBook['edition'];
  public isbn: IBook['isbn'];
  public created_at: IBook['created_at'];
  public updated_at: IBook['updated_at'];

  static get tableName() {
    return `${DatabaseTable.books}`;
  }

  static get jsonSchema(): JSONSchema {
    return BookValidation;
  }
}
