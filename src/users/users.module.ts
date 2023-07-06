import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { devicesProviders } from '../devices/devices.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, ...devicesProviders],
})
export class UsersModule {}
