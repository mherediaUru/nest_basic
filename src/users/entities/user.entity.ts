import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Device } from '../../devices/entities/device.entity';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  @Column
  name: string;
  @Column
  email: string;
  @Column
  password: string;
  @HasMany(() => Device)
  devices: Device[];
}
