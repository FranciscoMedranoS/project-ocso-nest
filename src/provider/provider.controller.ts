import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { UserData } from 'src/auth/decorators/user.decorators';
import { User } from 'src/auth/entities/auth.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';


@UseGuards(AuthGuard)
@Controller('provider')
export class ProvidersController {
  constructor(private readonly providersService: ProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @UseGuards(RolesGuard)
  @Roles(["Admin"])
  @Get()
  findAll(@UserData() user: User) {
    if(!user.userRoles.includes("Employee")) throw new UnauthorizedException("No esta autorizado, solo Admins y managers")
    return this.providersService.findAll();
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string){
    return this.providersService.findOneByName(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const provider =  this.providersService.findOne(id);
    if (!provider) throw new NotFoundException()
    return provider
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
}