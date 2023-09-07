import {v4 as uuid} from 'uuid';


export enum ReportType{
    INCOME = "income",
    EXPENSE = "expense"
}



export const data = {
    reports : [
        {
            id : uuid(),
            source : "Salary",
            amount : 23000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME

        },
        {
            id : uuid(),
            source : "Food",
            amount : 4000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENSE

        },
        {
            id : uuid(),
            source : "Rent",
            amount : 6000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENSE

        },
        {
            id : uuid(),
            source : "Freelance",
            amount : 10000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME

        },
        {
            id : uuid(),
            source : "Fuel",
            amount : 1000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENSE

        }
    ]
}