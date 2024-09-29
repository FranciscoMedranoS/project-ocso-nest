import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { ProvidersController } from './provider.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Provider])],
  controllers: [ProvidersController],
  providers: [ProviderService],
})
export class ProvidersModule {}