import { Test, TestingModule } from '@nestjs/testing';
import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';

describe('RatesController', () => {
  let ratesController: RatesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RatesController],
      providers: [RatesService],
    }).compile();

    ratesController = app.get<RatesController>(RatesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ratesController.getHello()).toBe('Hello World!');
    });
  });
});
