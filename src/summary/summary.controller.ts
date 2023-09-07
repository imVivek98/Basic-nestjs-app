import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {

    constructor(private readonly summaryService:SummaryService){}

    @Get()
    getSummary(){
        return this.summaryService.calculateSummary();
    }

}
