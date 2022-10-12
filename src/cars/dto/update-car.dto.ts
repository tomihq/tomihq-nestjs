import { IsString, MinLength, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString({message: 'The brand must be a string'})
    @IsOptional()
    readonly brand?: string; 

    @IsString({message: 'The model must be a string'})
    @MinLength(4)
    @IsOptional()
    readonly model?: string; 

}

