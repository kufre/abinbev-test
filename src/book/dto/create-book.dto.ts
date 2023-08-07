import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  /**
   * book title
   */
  @IsString()
  @IsNotEmpty()
  title: string;
  /**
   * book edition
   */
  @IsString()
  @IsNotEmpty()
  edition: string;

  /**
   * isbn number
   */
  @IsNumber()
  isbn: number;
}
