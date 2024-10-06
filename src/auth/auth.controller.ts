import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { brotliDecompress } from 'zlib';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto){
    return this.authService.registerUser(createUserDto)
  }
  @Post("login")
  login(@Body() loginUserDto :LoginUserDto){
    return this.authService.loginUser(loginUserDto)
  }
  @Patch("/:email")
  updataUser(@Param('email') userEmial: string ,@Body() UpdateUserDto: UpdateUserDto){
    return this.authService.updateUser(userEmial, UpdateUserDto)
  }

}