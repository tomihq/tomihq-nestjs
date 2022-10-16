import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
<<<<<<< HEAD
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
=======

@Module({
  imports: [CarsModule],
>>>>>>> parent of 80c96c2 (add: brands crud with entities)
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
