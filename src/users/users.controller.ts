import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users') // /users/getDetails=====>>> This is how it works
export class UsersController {

    @Get() // /users
    findAll(){
        return []
    }

    @Get(":id") // /users/id
    getOne(@Param('id') id: string){
        return {id}
    }

    @Post()
    createUser(@Body() body:{name:string , email:string}){

        const {name , email} = body
        console.log("body===",{name,email})

        return body
    }
}
