import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class DashboardController {
  @Get()
  index(@Req() request: Request, @Res() response: Response): void {
    response.status(HttpStatus.OK).send('Dashboard');
  }
}
