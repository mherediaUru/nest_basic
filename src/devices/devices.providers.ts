import { Device } from './entities/device.entity';
import { deviceRepository } from 'src/constants';

export const devicesProviders = [
  {
    provide: deviceRepository,
    useValue: Device,
  },
];
