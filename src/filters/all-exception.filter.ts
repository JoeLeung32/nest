import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const pathname = httpAdapter.getRequestUrl(ctx.getRequest());
    let responseBody: object | string;

    switch (true) {
      case pathname.search('/api/') === 0: {
        responseBody = {
          statusCode: httpStatus,
          path: pathname,
          timestamp: new Date().getTime(),
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
        break;
      }
      case pathname.search('/cp') === 0: {
        responseBody = `Cannot ${ctx.getRequest().method} ${pathname}`;
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
        break;
      }
      default: {
        ctx.getResponse().redirect('/');
        break;
      }
    }
  }
}
