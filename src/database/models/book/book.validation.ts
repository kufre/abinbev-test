import { JSONSchema } from 'objection';

export const BookValidation: JSONSchema = {
  type: 'object',
  required: ['title', 'edition', 'isbn'],
  properties: {
    title: { type: 'string' },
    edition: { type: 'string' },
    isbn: { type: 'string' },
  },
};
