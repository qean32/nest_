import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() body: any) {
    return this.usersService.create(body)
  }

  @Get()
  getAllUser() {
    return this.usersService.getAllUser()
  }

  @Patch('update')
  update(@Query() id: any, @Body() body: any) {
    return this.usersService.update(id, body)
  }

  @Delete('delete')
  delete(@Query() id: any) {
    return this.usersService.delete(id)
  }
}
