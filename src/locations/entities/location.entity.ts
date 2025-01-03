import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("increment")
  locationId: number;
  @ApiProperty({
    default: "OCSO Juriqulla"
  })
  @Column("text")
  locationName: string;

  @ApiProperty({
    default: "Avenida tal, S/N, 76116"
  })
  @Column("text")
  locationAddress: string;

  @ApiProperty({
    default: [12,22]
  })
  @Column("simple-array")
  locationLatLng: number[];

  @ApiProperty({default: "1b1434ad-5e6c-4ee3-806d-74406d65c714"})
  @OneToOne(() => Manager,{
    eager: true,
  })
  
  @JoinColumn({
    name: "ManagerId",
  })
  manager: Manager | string ;

  @ManyToOne(() => Region, (Region) => Region.locations)
  @JoinColumn({
    name: "regionId",
  })
  region: Region;

  @OneToMany(() => Employee, (employee) => employee.location)
  employees: Employee[];
}