import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';


export interface createReport{
    source : string;
    amount : number;
}

export interface updateReport{
    source ?: string;
    amount ?: number;
}


@Injectable()
export class ReportsService {

    getAllReports(type : string){
        return data.reports.filter((reports) => reports.type === type);
    }

    getReportsById(id:string,type:string){
        return data.reports.filter((reports)=> reports.type === type).find((reports) => reports.id === id);
    }

    createReport(type:ReportType , {source,amount} : createReport){
        const newReport = {
            id : uuid(),
            source,
            amount,
            created_at : new Date,
            updated_at : new Date,
            type : type
        }

        return data.reports.push(newReport);
    }

    updateReport(id : string , body : updateReport){
        const reportIndex = data.reports.findIndex((reports) => reports.id === id)
        return {...data.reports[reportIndex],body}
        }


    deleteReport(id:string){
        const reportIndex = data.reports.findIndex((reports) => reports.id === id)
        return data.reports.splice(reportIndex,1);
    }
    }


