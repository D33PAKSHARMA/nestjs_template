import { Injectable, NotFoundException } from '@nestjs/common';
import { Pizza } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PizzaService {
    constructor(@InjectModel(Pizza.name) private PizzaModel: Model<Pizza>){}


    async createPizza(body: Pizza): Promise<Pizza>{
        const pizza = await this.PizzaModel.create(body);

        return pizza;
    }

    async getAllPizza(): Promise<Pizza[]>{
        const pizzas = await this.PizzaModel.find();

        return pizzas;
    }

    async getPizzaById(id: string): Promise<Pizza>{
        const pizza = await this.PizzaModel.findById({_id: id})

        if(!pizza) {
            throw new NotFoundException("Pizza not found");
        }

        return pizza
    }
    async updatePizzaById(id: string , pizza: Pizza): Promise<Pizza>{
        return await this.PizzaModel.findByIdAndUpdate(id,pizza,{new:true})
    }
}
