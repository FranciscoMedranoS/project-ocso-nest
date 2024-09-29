import { IsEmail, IsString, MinLength } from "class-validator";
import { User } from "../entities/auth.entity";


export class CreateUserDto extends User {
  @IsEmail()
  userEmail: string;
  @IsString()
  @MinLength(8)
  userPassword: string;
}