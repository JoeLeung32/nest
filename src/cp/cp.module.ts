import { Module } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import { CpController } from './cp.controller';
import { DashboardModule } from './mod/dashboard/dashboard.module';

export const CPRoutes: Routes = [
  {
    path: 'dashboard',
    module: DashboardModule,
  },
];

@Module({
  controllers: [CpController],
  imports: [DashboardModule],
})
export class CpModule {}
