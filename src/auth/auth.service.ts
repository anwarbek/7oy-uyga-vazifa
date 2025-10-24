import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Auth } from './auth.model';
import { InjectModel } from '@nestjs/sequelize';
import { RegisterDto } from './dto/register.dto';
import * as nodemailer from "nodemailer"

@Injectable()
export class AuthService {
  private transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arsbekyaw@gmail.com",
      pass: "poho gkec nvap jnyy"
    }
  })
  constructor(@InjectModel(Auth) private authModel: typeof Auth) { }

  async register(registerDto: RegisterDto) {
    const { username, email, password } = registerDto

    const user = await this.authModel.findOne({ where: { email } })
    if (user) throw new UnauthorizedException("User already exist")

    await this.transport.sendMail({
      from: "arsbekyaw@gmail.com",
      to: email,
      subject: "hazl",
      text: "salom"
    })
    await this.authModel.create({ username, email, password })
    return { message: "Registered" }
  }
}
