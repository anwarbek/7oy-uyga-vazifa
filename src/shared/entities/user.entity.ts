import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ default: "Ali" })
  username: string

  @Column()
  @ApiProperty({ default: "arsbekyaw@gmail.com" })
  email: string

  @Column()
  @ApiProperty({ default: "1234" })
  password: string

  @Column()
  @ApiProperty({ default: 12 })
  age: number

  @Column()
  @ApiProperty({ default: "http://kun.uz/200/200" })
  img: string
}