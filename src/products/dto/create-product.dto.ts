import { IsInt, IsNumber, IsOptional, IsPositive, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateProductDto {
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
    @IsOptional()
    provider: string;
}
