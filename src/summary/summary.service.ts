import { Injectable } from '@nestjs/common';
import { data } from 'src/data';

@Injectable()
export class SummaryService {

    calculateSummary(){
        const totalIncome = data.reports.filter((reports)=>reports.type === "income").reduce((sum,reports) => sum + reports.amount,0)
        const totalExpense = data.reports.filter((reports)=>reports.type === "expense").reduce((sum,reports) => sum + reports.amount,0)
        return `The total income : ${totalIncome}. \n The total expense is : ${totalExpense}`;
    }
}
