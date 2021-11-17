import { Body, Controller, Request, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  showAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return this.usersService.showById(req.user.userId);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
}
