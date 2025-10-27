import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {

  @IsEmail()
  @Length(3, 100)
  @IsNotEmpty()
  @ApiProperty({ description: "email for register", example: "arsbekyaw@gmail.com" })
  email: string;

  @IsString()
  @Length(3, 300)
  @IsNotEmpty()
  @ApiProperty({ description: "password for register", example: "1234" })
  password: string;
}