import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
    providers: [PostsResolver, PostsService, UsersService]
})
export class PostsModule {}
