import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/shared/entities/article.entity';
import { ArticleContent } from 'src/shared/entities/article-content';
import { DeepPartial, Repository } from 'typeorm';
import { Auth } from 'src/shared/entities/auth.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
    @InjectRepository(ArticleContent) private articleContentRepository: Repository<ArticleContent>,
  ) { }
  async create(createArticleDto: CreateArticleDto, author: Auth) {
    const { tags, title, description, body, imgUrl, IsMemberOnly, content } = createArticleDto

    const contentEntites = content.map(data => this.articleContentRepository.create(data as DeepPartial<ArticleContent>))

    const article = this.articleRepository.create({
      author,
      tags,
      title,
      description,
      body,
      imgUrl,
      IsMemberOnly,
      content: contentEntites
    } as DeepPartial<Article>)

    return await this.articleRepository.save(article)
  }

  findAll() {
    return `This action returns all articles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
