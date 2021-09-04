import * as DataLoader from 'dataloader';

import { mapFromArray } from '../utils';
import { User } from './user.entity';
import { UsersService } from './users.service';

export function createUsersLoader(usersService: UsersService) {
  return new DataLoader<number, User>(async (ids: Array<number>) => {
    const users = await usersService.getUsersByIds(ids);

    const usersMap = mapFromArray(users, (user) => user.id);

    return ids.map((id) => usersMap[id]);
  });
}