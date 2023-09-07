import { Test, TestingModule } from '@nestjs/testing';
import { reportsController } from './reports.controller';

describe('ReportsController', () => {
  let controller: reportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [reportsController],
    }).compile();

    controller = module.get<reportsController>(reportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
