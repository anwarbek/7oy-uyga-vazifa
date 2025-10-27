import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Roles } from 'src/shared/decorators/role.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { Role } from 'src/enums/role.enum';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.Admin, Role.User)
@ApiTags("User")
@ApiBearerAuth("JWT-auth")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({ description: "Create user" })
  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ description: "Get all users" })
  @ApiResponse({ status: 200, description: "Get all user" })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ description: "Get one user" })
  @ApiParam({ name: "id", description: "param id" })
  @ApiResponse({ status: 200, description: "Get one user" })
  @ApiResponse({ status: 404, description: "User not found" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ description: "Update user" })
  @ApiBody({ type: CreateUserDto })
  @ApiParam({ name: "id", description: "param id" })
  @ApiResponse({ status: 200, description: "Updated user" })
  @ApiResponse({ status: 404, description: "User not found" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ description: "Delete user" })
  @ApiParam({ name: "id", description: "param id" })
  @ApiResponse({ status: 200, description: "Deleted user" })
  @ApiResponse({ status: 404, description: "User not found" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}