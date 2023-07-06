import { Injectable, Inject } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';
import { deviceRepository } from 'src/constants';

@Injectable()
export class DevicesService {
  constructor(
    @Inject(deviceRepository)
    private devicesRepository: typeof Device,
  ) {}

  create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesRepository.create<Device>({
      name: createDeviceDto.name,
      version: createDeviceDto.version,
      userId: createDeviceDto.userId,
    });
  }

  findAll(): Promise<Device[]> {
    return this.devicesRepository.findAll<Device>();
  }

  findOne(id: string) {
    return this.devicesRepository.findAll<Device>({ where: { id } });
  }

  update(id: string, updateDeviceDto: UpdateDeviceDto) {
    return this.devicesRepository.update<Device>(
      {
        name: updateDeviceDto.name,
        version: updateDeviceDto.version,
      },
      { where: { id } },
    );
  }

  remove(id: string) {
    return this.devicesRepository.destroy({ where: { id } });
  }
}
