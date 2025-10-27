import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { APP_FILTER, APP_GUARD, APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "./validation/validation.pipe";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { TypeOrmModule } from '@nestjs/typeorm'
import { Auth } from './shared/entities/auth.entity';
import { User } from './shared/entities/user.entity';
import { HttpExceptionFilter } from './filter/all-exception.filter';
import { UploadModule } from './module/upload/upload.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 100,
        },
      ],
    }),
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      username: "postgres",
      host: "localhost",
      port: 5432,
      database: "test3",
      password: "wolf563",
      entities: [Auth, User],
      synchronize: true,
      autoLoadEntities: true,
      logging: false
    }),
    AuthModule,
    UserModule,
    UploadModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule { }
