import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { CarDB } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars():CarDB[]{
    return this.carsService.findAll();
  }
  
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string ):CarDB{
    return this.carsService.findOneById(id)
  } 

  @Post()
  create(@Body() createCarDto: CreateCarDto){
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto)
  {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string):{}{
    return this.carsService.delete(id);
  } 



}
