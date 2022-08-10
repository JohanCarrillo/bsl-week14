import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// controllers
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';
import { PetService } from './pet/pet.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
    }),
  ],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService, PetService],
})
export class AppModule {}
