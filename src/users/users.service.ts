import { Injectable } from '@nestjs/common';
import { use } from 'passport';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Marlon',
      password: 'password',
    },
    {
      userId: 2,
      username: 'Raphael',
      password: 'password',
    },
    {
      userId: 3,
      username: 'Sampaio',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
