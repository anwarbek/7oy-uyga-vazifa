import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(201)
  @Post("register")
  register(@Body() RegisterDto: RegisterDto) {
    return this.authService.register(RegisterDto)
  }
}
