import { BadRequestException, Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { isValidObjectId } from 'mongoose';

@Controller('pizza')
export class PizzaController {
    constructor(public pizzaService: PizzaService){}

    @Post('/new')
    async createPizza(
        @Body() pizza: any){
            // console.log("pizza",pizza)
        const res =  this.pizzaService.createPizza(pizza)
        return res
    }

    @Get()
    async getAllPizzas(){
        return this.pizzaService.getAllPizza()
    }

    @Get('/:id')
    async findById(@Param('id') id: string){

        const isValidId = isValidObjectId(id)
        if(!isValidId) throw new BadRequestException("Please enter valid id")
        return this.pizzaService.getPizzaById(id)
    }

    @Put('/:id')
    async findBYIdAndUpdate(@Param('id') id: string , @Body() body: any){
        return this.pizzaService.updatePizzaById(id , body)
    }
}
