import { User } from './entities/user.entity';
import { userRepository } from 'src/constants';

export const usersProviders = [
  {
    provide: userRepository,
    useValue: User,
  },
];
