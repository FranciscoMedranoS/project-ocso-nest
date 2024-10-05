import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { ProvidersController } from './provider.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY, EXPIRES_IN } from 'src/auth/constants/jwt.constants';

@Module({
  imports:[TypeOrmModule.forFeature([Provider]), JwtModule.register({
    secret: JWT_KEY,
    signOptions: {
    expiresIn: EXPIRES_IN,
  }
})],
  controllers: [ProvidersController],
  providers: [ProviderService],
})
export class ProvidersModule {}