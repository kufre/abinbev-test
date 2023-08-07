import { Model } from 'objection';
import { BaseModel } from '../base';
import { BookModel } from './book.service';
import { BookValidation } from './book.validation';

describe('BookModel', () => {
  describe('Book DB Model', () => {
    it('should return be define', () => {
      expect(BookModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(BookModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(BookModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(BookModel.tableName).toBe('books');
    });

    it('should have a json schema', () => {
      expect(BookModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(BookModel.jsonSchema).toEqual(BookValidation);
      expect(BookModel.jsonSchema.required).toEqual([
        'title',
        'edition',
        'isbn',
      ]);
    });
  });
});
