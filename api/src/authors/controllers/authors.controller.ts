import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from '../services/authors.service';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}
  @ApiOperation({ summary: 'This action adds a new author' })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @ApiOperation({ summary: 'Get all authors' })
  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @ApiOperation({ summary: 'This action returns a #${id} author' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  @ApiOperation({ summary: 'This action updates a #${id} author`' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @ApiOperation({ summary: 'This action removes a #${id} author`' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
