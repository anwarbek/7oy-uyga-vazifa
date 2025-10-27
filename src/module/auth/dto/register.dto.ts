import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class RegisterDto {
  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  @ApiProperty({ description: "username for register", example: "Ali" })
  username: string;

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