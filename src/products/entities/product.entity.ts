import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  writer: string;

  @Column()
  cover_image: string;

  @Column()
  point: string;

  @Column()
  tag: string;

  @Column()
  email: string;
}
