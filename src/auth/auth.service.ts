import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Auth } from './auth.model';
import { InjectModel } from '@nestjs/sequelize';
import { RegisterDto } from './dto/register.dto';
import * as nodemailer from "nodemailer"
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arsbekyaw@gmail.com",
      pass: "poho gkec nvap jnyy"
    }
  })
  constructor(
    @InjectModel(Auth) private authModel: typeof Auth,
    private jwtService: JwtService
  ) { }

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

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto

    const user = await this.authModel.findOne({ where: { email } })
    if (!user) throw new UnauthorizedException("User not found")

    const payload = { sub: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload)
    return { message: "Success", token }
  }
}
