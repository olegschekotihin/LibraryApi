import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from '../../services/auth/auth.service';
import { AuthLoginDto } from '../../dto/auth-login.dto';
import { JwtAuthGuard } from '../../jwt-auth.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Auto login' })
  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @ApiOperation({ summary: 'Check login' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}
