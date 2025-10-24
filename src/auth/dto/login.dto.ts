import { IsEmail, IsString } from "class-validator";

export class RLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}