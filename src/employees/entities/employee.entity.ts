import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  employeeId: string;
  @ApiProperty({
    default: "Karlo"
  })
  @Column("text")
  employeeName: string;
  @ApiProperty({
    default: "Paz"
  })
  @Column("text")
  employeeLastName: string;

  @ApiProperty({
    default: "4421473043"
  })
  @Column("text")
  employeePhoneNumber: string;

  @ApiProperty({
    default: "karlo@gmial.com"
  })
  @Column("text",{
    unique: true,
  })
  employeeEmail: string;

  @ApiProperty({
    default: "URL"
  })
  @Column({
    type: "text",
    nullable: true,
  })
  employeePhoto: string;

  @ManyToOne(() => Location, (location) => location.employees)
  @JoinColumn({
    name: "locationId",
  })
  location: Location;

  @OneToOne(() => User)
  @JoinColumn({
    name: "userId"
  })
  user: User;

}