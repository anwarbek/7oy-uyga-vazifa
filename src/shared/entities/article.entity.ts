import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Auth } from "./auth.entity";
import { Comment } from "./comment.entity";
import { ArticleContent } from "./article-content";

@Entity({ name: "article" })
export class Article {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  description: string;

  @Column()
  imgUrl: string;

  @Column("simple-array", { nullable: true })
  tags: string[];

  @Column({ default: false })
  IsMemberOnly: boolean;

  @Column({ default: false })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // relations
  @ManyToOne(() => Auth, (auth) => auth.articles)
  author: Auth;

  @OneToMany(() => Comment, (comment) => comment.article, { cascade: true })
  comments: Comment[];

  @OneToMany(() => ArticleContent, (content) => content.article, { cascade: true })
  contents: ArticleContent[]
}