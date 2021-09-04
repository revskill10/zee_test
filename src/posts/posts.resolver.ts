import { Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import * as DataLoader from 'dataloader';

import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver(Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts(@Context() context: any) {
    console.log(context.randomValue);
    return this.postsService.getPosts();
  }

  @ResolveField('createdBy', () => User)
  getCreatedBy(@Parent() post: Post, @Context('usersLoader') usersLoader: DataLoader<number, User>,) {
    const { userId } = post;
    return usersLoader.load(userId);
  }
}