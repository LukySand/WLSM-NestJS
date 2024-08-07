import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('local')
export class LocalController {
    @Get()
    findAll() {
        return 'all locals';
    }

    @Get(':id')
    findOne(@Param("id") id: string) {
        return 'local number ' + id;
    }

    @Post('create')
    create(@Body() input: any) {
        console.log(input);
        return 'creating local \n' + JSON.stringify(input);
    }
}
