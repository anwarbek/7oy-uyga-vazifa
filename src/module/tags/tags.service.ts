import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from 'src/shared/entities/tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tags) private tagsRepository: Repository<Tags>) { }
  create(createTagDto: CreateTagDto) {
    const { username, email, password, age, img } = createUserDto
    const user = this.userRepo.create({ username, email, password, age, img })
    return this.userRepo.save(user)
  }

  findAll() {
    return `This action returns all tags`;
  }


  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
