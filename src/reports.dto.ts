import { Exclude, Expose } from "class-transformer";
import { ReportType } from "./data";
import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";


export class createReportDto{
    @IsNotEmpty()
    @IsString()
    source : string;


    @IsNumber()
    @IsPositive()
    amount : number;

}


export class updateReportDto{
    @IsOptional()
    @IsString()
    source : string;

    @IsPositive()
    @IsOptional()
    @IsNumber()
    amount : number;

}


export class ReportResponseDto{
    id: string;
    source : string;
    amount : number;

    @Exclude()
    created_at : Date;

    type : ReportType;

    @Exclude()
    updated_at : Date;

    @Expose({name : "createdAt"})
    transformCreatedAt(){
        return this.created_at;
    }

    constructor(partial : Partial<ReportResponseDto>){
        Object.assign(this,partial)
    }
}