import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleGuard } from './roles.guard';
import { Roles } from './rolesa-auth.decoarator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body)
  }

  @Post('registration')
  // @Roles('admin')
  @UseGuards(RoleGuard)
  registration(@Body() body: any) {
    return this.authService.registration(body)
  }
}
