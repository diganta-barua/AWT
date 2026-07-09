import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, Matches  } from "class-validator";

export class createcoursedto{
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @Matches(/^[A-Z]{2}\d{3}$/ , {message: "code eg : CS101"})
    code:string;

    @IsNotEmpty()
    instructor:string;

    @IsNotEmpty()
    @IsString()
    @Type(()=> Number)
    credits:number;
    @IsOptional()
    @IsString()
    description:string;
    
}
