import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { reportsController } from './reports/reports.controller';
import { ReportsModule } from './reports/reports.module';
import { SummaryModule } from './summary/summary.module';
import { ReportsService } from './reports/reports.service';

@Module({
  imports: [ReportsModule, SummaryModule],
  controllers: [AppController, reportsController],
  providers: [AppService , ReportsService],
})
export class AppModule {}
