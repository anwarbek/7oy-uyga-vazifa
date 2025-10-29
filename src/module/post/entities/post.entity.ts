import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Post {
  @Prop()
  title: string;

  @Prop()
  desc: string;
}

export const PostSchema = SchemaFactory.createForClass(Post)