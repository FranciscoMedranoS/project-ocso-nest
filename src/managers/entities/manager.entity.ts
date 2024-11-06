import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Manager {
  @PrimaryGeneratedColumn("uuid")
  managerId: string;
  @ApiProperty({
    default: "Karlo Paz"
  })
  @Column("text")
  managerFullName: string;
  @ApiProperty({
    default: "$18000"
  })
  @Column("float")
  managerSalary: number;

  @ApiProperty({
    default: "karlo@gmial.com"
  })
  @Column("text",{
    unique: true,
  })
  managerEmail: string;

  @ApiProperty({
    default: "4421473043"
  })
  @Column("text")
  managerPhoneNumber: string;

  @OneToOne(() => Location)
  @JoinColumn({
    name : "locationId"
  })
  location: Location;


  @OneToOne(()=> User)
  @JoinColumn({
    name: "userId"
  })
  user: User;
}