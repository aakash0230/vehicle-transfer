import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Properties from './core/properties/properties.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {isGlobal : true}
    ),
    Properties
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
