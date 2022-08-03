import { Controller, Get } from '@nestjs/common';

@Controller()
export class CpController {
  @Get()
  index(): string {
    return 'CP';
  }
}
