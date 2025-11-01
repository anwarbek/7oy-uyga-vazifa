import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Article } from "./article.entity";

@Entity({ name: "auth" })
export class Auth {
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

  @Column({ default: Role.User })
  role: string

  @Column({ nullable: true, type: "text" })
  bio: string

  @Column({ nullable: true })
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  //relations
  @OneToMany(() => Article, (article) => article.author)
  articles: Article[]

  @OneToMany(() => Comment, (comment) => comment.author)
  comment: Comment[]

}