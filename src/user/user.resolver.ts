import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { UserGraphQL } from './model/user.model';
import { UserService } from './user.service';
import { UserInputGraphQL } from './dto/user.input';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}
    
    @Query(() => [UserGraphQL])
    async getAllUsers(): Promise<UserGraphQL[]> {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Query(() => UserGraphQL)
    async getUserByEmail ( @Args('email', { type: ()=> String, nullable: false })
    email: string)
    : Promise<UserGraphQL> {
        const user = await this.userService.getUserByEmail(email);
        return user;
    }
    
    @Mutation(() => UserGraphQL)
    async createUser (
        @Args('data', { type: ()=> UserInputGraphQL, nullable: false })
        data: UserInputGraphQL): Promise<UserGraphQL> {
            const user = await this.userService.createUser(data);
            return user;
        }

    @Mutation(() => UserGraphQL)
    async updateUser (
        @Args('data', { type: ()=> UserInputGraphQL, nullable: false })
        data: UserInputGraphQL,
        @Args('id', {type: ()=> Int})
        id: number): Promise<UserGraphQL> {
            const user = await this.userService.updateUser(data, id);
            return user;
        }
    
}
