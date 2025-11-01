import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Article } from "./article.entity";
import { Auth } from "./auth.entity";

export const ContentTypes = ["image", "code", "list", "paragraph", "heading"] as const
export type ContentType = typeof ContentTypes[number]

@Entity({ name: "tags" })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  description: string

  @Column({ default: 0 })
  clapCount: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}