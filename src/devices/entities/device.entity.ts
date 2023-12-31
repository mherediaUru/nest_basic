import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

import { User } from '../../users/entities/user.entity';
@Table
export class Device extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  @Column
  name: string;
  @Column
  version: string;
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId: string;
}
