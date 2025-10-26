import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "auth" })
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ default: "Ali" })
  username: string

  @Column()
  @ApiProperty({ default: "arsbekyaw@gmail.com" })
  email: string

  @Column()
  @ApiProperty({ default: "1234" })
  password: string

  @Column({ default: Role.User })
  role: string
}