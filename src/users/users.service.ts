import { Injectable } from '@nestjs/common';

import { sleep } from '../utils';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Anna' },
  ];

  async getUsers() {
    console.log('Getting users...');
    await sleep(3000);
    return this.users;
  }

  async getUser(id: number) {
    console.log(`Getting user with id ${id}...`);
    await sleep(1000);
    return this.users.find((user) => user.id === id);
  }

  async getUsersByIds(ids: Array<number>) {
    console.log(`Getting users with ids ${ids}...`);
    await sleep(1000);
    return this.users.filter((user) => ids.includes(user.id));
  }
}