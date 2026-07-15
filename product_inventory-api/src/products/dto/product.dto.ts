import { Type } from "class-transformer";
import { IsBoolean, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class productdto{
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsOptional()
    @IsString()
    description:string;
    @IsNumber()
    @IsPositive()
    @Type(()=> Number)
    price:number;
    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(()=> Number)
    stock:number;
    @IsNotEmpty()
    @IsString()
    category:string;
    @IsOptional()
    @IsBoolean()
    isActive:boolean;

}