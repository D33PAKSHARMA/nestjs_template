import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class Pizza{
    @Prop()
    name: string

    @Prop()
    price: number

    @Prop()
    size: string

    @Prop()
    image: string
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);