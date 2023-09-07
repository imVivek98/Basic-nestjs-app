import { Module } from '@nestjs/common';
import { reportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  controllers: [reportsController],
  providers: [ReportsService],
  exports: [ReportsService]
})
export class ReportsModule {}
