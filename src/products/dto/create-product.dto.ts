import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(4)
  title: string;

  @IsString()
  writer: string;

  @IsString()
  cover_image: string;

  @IsString()
  point: string;

  @IsString()
  tag: string;
}
