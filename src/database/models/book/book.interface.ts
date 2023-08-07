import { IBase } from '../base';

export interface IBook extends IBase {
  title: string;
  edition: string;
  isbn: number;
}
