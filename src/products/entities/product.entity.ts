import { Provider } from "src/provider/entities/provider.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  productId: string;
  @Column("text")
  productName: string;
  @Column("float")
  price: number;
  @Column("int")
  countSeal: number;
  @ManyToOne(() => Provider,(provider) => provider.products)
  provider: Provider
}