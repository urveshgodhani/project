import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-7.railway.app',
      port: 6146,
      username: 'postgres',
      password: 'a5GcYAnXqqNwCRet9GO4',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    UserModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
