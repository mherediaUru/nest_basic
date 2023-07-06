import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Device } from '../devices/entities/device.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userRepository, deviceRepository } from 'src/constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(userRepository)
    private userModelInstance: typeof User,
    @Inject(deviceRepository)
    private deviceModelInstance: typeof Device,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const createResult = await this.userModelInstance.create<User>({
      name: createUserDto.name,
      email: createUserDto.email,
      password,
    });
    return createResult;
  }

  findAll(): Promise<User[]> {
    return this.userModelInstance.findAll<User>();
  }

  findOne(id: string) {
    return this.userModelInstance.findAll<User>({
      where: { id },
      include: [{ model: this.deviceModelInstance }],
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModelInstance.update<User>(
      {
        name: updateUserDto.name,
      },
      { where: { id } },
    );
  }

  remove(id: string) {
    return this.userModelInstance.destroy({ where: { id } });
  }
}
