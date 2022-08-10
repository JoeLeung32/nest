import { Module } from '@nestjs/common';
import { APP_FILTER, RouterModule, Routes } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule, ApiRoutes } from './api/api.module';
import { AllExceptionFilter } from './filters/all-exception.filter';

const routes: Routes = [
  {
    path: 'api',
    module: ApiModule,
    children: ApiRoutes,
  },
];

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../cp/`,
      exclude: ['/api*'],
      serveStaticOptions: {
        cacheControl: false,
        dotfiles: 'ignore',
        etag: true,
        index: 'index.html',
        redirect: false,
      },
    }),
    ApiModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
