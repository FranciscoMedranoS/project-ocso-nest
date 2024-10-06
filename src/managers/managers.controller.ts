import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ManagersService } from "./managers.service";
import { CreateManagerDto } from "./dto/create-manager.dto";
import { UpdateManagerDto } from "./dto/update-manager.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { audit } from "rxjs";
import { ROLES } from "src/auth/constants/roles.constants";
import { ApiAuth } from "src/auth/decorators/api.decorator";
import { ApiTags } from "@nestjs/swagger";
import { ApiResponse } from "@nestjs/swagger";
import { Manager } from "./entities/manager.entity";

@ApiAuth()
@ApiTags('Managers')
@Controller("managers")
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}
  @ApiResponse({
    status: 201,
    example:{
      managerId: "UUID",
      managerFullName: "Karlo Paz",
      managerSalary: "$18000",
      managerEmail: "karlo@gmial.com",
      managerPhoneNumber: "4421473043",
    } as unknown as Manager
  })
  @Auth()
  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.managersService.create(createManagerDto);
  }

  @Auth()
  @Get()
  findAll() {
    return this.managersService.findAll();
  }

  @Auth()
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.managersService.findOne(id);
  }

  @Auth(ROLES.MANAGER)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managersService.update(id, updateManagerDto);
  }

  @Auth()
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.managersService.remove(id);
  }
}