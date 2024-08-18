import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserInputGraphQL } from './dto/user.input';
import { UserGraphQL } from './model/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: UserInputGraphQL) {
    return this.prisma.user.create({
      data: {...data, createdAt: new Date},
    });
  }

  async updateUser(data: UserInputGraphQL, id: number) {
    return this.prisma.user.update({
      where: { id },
      data
    })
  }

}
