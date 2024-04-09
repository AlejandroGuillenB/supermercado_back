import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async signIn(@Body() signInDto: Record<string, any>) {
    return await this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getProfile(@Request() req) {
    return req.user;
  }
}
