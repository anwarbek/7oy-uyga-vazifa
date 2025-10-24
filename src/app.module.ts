import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.model';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      username: "postgres",
      host: "localhost",
      port: 5432,
      database: "test3",
      password: "wolf563",
      models: [Auth, User],
      synchronize: true,
      autoLoadModels: true,
      logging: false
    }),
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
