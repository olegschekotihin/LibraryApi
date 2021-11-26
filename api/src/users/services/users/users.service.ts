import { Injectable } from '@nestjs/common';
import User from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);

    delete user.password;
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async readUser(userId): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['books'],
    });
  }

  async readAuthor(userId): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['authors'],
    });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
