import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {
  @Get()
  index(): string {
    return 'API';
  }
}
