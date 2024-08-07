import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocalModule } from './local/local.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [UserModule, LocalModule, ProductModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
