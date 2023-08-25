import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AppService } from 'src/app.service';
import { TokenService } from 'src/token/token.service';
import e from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  // @Post('/createUser')
  // create(@Body() createUserDto: any) {
  //   return this.usersService.createUser(createUserDto);
  // }

  @Get('/getAll')
  findAll() {
    return this.usersService.findAllUsers();
  }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOneUser(id);
  // }

  @Get('/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usersService.fineUserByEmail(email);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
