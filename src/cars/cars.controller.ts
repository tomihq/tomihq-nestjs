import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe} from '@nestjs/common';
import { CarsDB, CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars():CarsDB[]{
    return this.carsService.findAll();
  }
  
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number):{}{
    return this.carsService.findOneById(id)
  } 

  @Post()
  create(@Body() body: any){
    return {body};
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: any)
  {
    return {
      msg: `Car to update ID: ${id}`,
      body
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number):{}{
    return {
      msg: `Car to delete ID: ${id}`,
    };
  } 



}
