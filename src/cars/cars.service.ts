import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CarDB } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto} from './dto';

@Injectable()
export class CarsService {  
    private cars:CarDB[];

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find((car) => car.id === id);
        if(!car) throw new NotFoundException(`Car with ID '${id}' not found`);
        
        return car;
    }

    create(createCarDto: CreateCarDto){
        const car:CarDB = {
            id: uuid(),
            ...createCarDto
        }
        

        this.cars.push(car);
        
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
       let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id!==id)
            throw new BadRequestException('Car id is not valid inside body')

        this.cars = this.cars.map((car)=>{
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id: string): {} {
        this.findOneById(id);
        this.cars = this.cars.filter((car: CarDB)=> car.id!==id); 

        return {
            ok: true,
            msg: 'Se ha eliminado el auto'
        }
    }

    fillCarsWithSeedData(cars: CarDB[]){
        this.cars = cars;
    }

}

