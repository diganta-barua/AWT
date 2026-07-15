import { IsNotEmpty, IsString } from "class-validator";

export class enrollmentDTO{
    @IsNotEmpty()
    @IsString()
    name!:string;
    
    @IsNotEmpty()
    @IsString()
    courseid!:string;
}