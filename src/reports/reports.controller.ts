import { Controller,Get,Post,Put,Delete, Param, Body } from "@nestjs/common/decorators";
import { ReportType } from "src/data";
import { ReportsService, createReport, updateReport } from "./reports.service";


@Controller('report/:type')
export class reportsController{
    constructor(private readonly reportService : ReportsService){}

  @Get()
  getAllIncomeReports(@Param("type") type:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(type);

 }

  @Get(':id')
  getReportsById(@Param('id') id:string , @Param('type') type:string){
    return this.reportService.getReportsById(id , type);
  }


  @Post()
  createReport(@Param('type') type:ReportType , @Body() body:createReport){
    return this.reportService.createReport(type,body)

  }

  @Put(':id')
  updateReport(@Param('id') id: string, @Body() body:updateReport){
    return this.reportService.updateReport(id,body);
  }

  @Delete(':id')
  deleteReport(@Param('id') id:string){
    return this.reportService.deleteReport(id);
  }

  
}