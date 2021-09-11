import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalStrategy } from './auth/local.strategy';

@Controller()
export class AppController {
  @UseGuards(LocalStrategy)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
