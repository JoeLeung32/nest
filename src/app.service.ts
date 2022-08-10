import { HttpStatus, Injectable, Inject, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  redirect(@Res() response: Response): void {
    response.status(HttpStatus.PERMANENT_REDIRECT).redirect('/cp');
  }
}
