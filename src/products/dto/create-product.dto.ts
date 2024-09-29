import { IsInt, IsNumber, IsOptional, IsPositive, IsString, IsUUID, MaxLength } from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from "src/provider/entities/provider.entity";

export class CreateProductDto extends Product {
    @IsString()
    @IsUUID("4")
    @IsOptional()
    productID: string;
    @IsString()
    @MaxLength(40)
    productName: string;
    @IsNumber()
    price: number;
    @IsInt()
    countSeal: number;
    @IsString()
    @IsUUID()
    provider: Provider;
}
