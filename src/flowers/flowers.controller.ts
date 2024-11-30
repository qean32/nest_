import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get("page")
  getPage(@Query() { offset, limit }: any) {
    return this.flowersService.getPage(offset, limit)
  }

  @Post('create')
  create(@Body() body) {
    return this.flowersService.create(body)
  }

  @Get(':id')
  getById(@Param() id) {
    return this.flowersService.findById(id)
  }

  @Patch(':id/update')
  update(@Body() body, @Param() id) {
    return this.flowersService.update(id, body)
  }

  @Get('all')
  all() {
    return this.flowersService.findAll()
  }

  @Delete(':id/delete')
  delete(@Param() id) {
    return this.flowersService.delete(id)
  }
}
