import { Module } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import { ApiController } from './api.controller';

export const ApiRoutes: Routes = [];

@Module({
  controllers: [ApiController],
})
export class ApiModule {}
