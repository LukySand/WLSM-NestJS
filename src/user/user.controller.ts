import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    // @Get()
    // findAll() {
    //     return 'all users';
    // }

    @Post('create')
    create(@Body() input: any) {
        console.log(input);
        return 'creating user \n' + JSON.stringify(input);
    }

    @Post('login')
    findOne() {
        return 'logging in';
    }
}
