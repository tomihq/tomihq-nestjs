import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCarDto{
    
    @IsString({message: 'The brand must be a string'})
    readonly brand: string; 

    @IsString({message: 'The model must be a string'})
    @MinLength(4)
    readonly model: string; 

    @IsNumber()
    @MinLength(4)
    readonly age: number; 

}

