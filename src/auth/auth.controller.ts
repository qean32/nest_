import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  registration(@Body() createUserDto: CreateUserDto) {
    return this.authService.regisatration(createUserDto);
  }

  @Post()
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
