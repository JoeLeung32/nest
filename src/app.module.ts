import { Module } from '@nestjs/common';
import { APP_FILTER, RouterModule, Routes } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule, ApiRoutes } from './api/api.module';
import { CpModule, CPRoutes } from './cp/cp.module';
import { AllExceptionFilter } from './filters/all-exception.filter';

const routes: Routes = [
  {
    path: 'api',
    module: ApiModule,
    children: ApiRoutes,
  },
  {
    path: 'cp',
    module: CpModule,
    children: CPRoutes,
  },
];

@Module({
  imports: [ApiModule, CpModule, RouterModule.register(routes)],
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
