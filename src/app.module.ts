import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule, ApiRoutes } from './api/api.module';
import { CpModule, CPRoutes } from './cp/cp.module';

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
  providers: [AppService],
})
export class AppModule {}
