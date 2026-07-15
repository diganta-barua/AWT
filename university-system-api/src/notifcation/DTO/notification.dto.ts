import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class notificationdto{
    @IsNotEmpty()
    @IsString()
    studentname!:string;

    @IsOptional()
    @IsString()
    message?:string;

    @IsNotEmpty()
    @IsString()
    id!:string;
}
