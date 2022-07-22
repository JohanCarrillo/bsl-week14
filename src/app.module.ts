import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { PetService } from './pet/pet.service';

@Module({
  imports: [],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService, PetService],
})
export class AppModule {}
