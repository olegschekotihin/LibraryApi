import {
  Body,
  Controller,
  Request,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create User' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all Users' })
  @Get()
  showAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get all books for this user' })
  @Get('/getBooks/:id')
  showAllBooks(@Param('id') id: string) {
    return this.usersService.readUser(+id);
  }

  @ApiOperation({ summary: 'Get all authors for this user' })
  @Get('/getAuthors/:id')
  showAllAuthors(@Param('id') id: string) {
    return this.usersService.readAuthor(+id);
  }

  @ApiOperation({ summary: 'Check User' })
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return this.usersService.showById(req.user.userId);
  }

  @ApiOperation({ summary: 'Get User by id' })
  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
}
