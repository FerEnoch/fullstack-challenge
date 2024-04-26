import { Module } from '@nestjs/common';
import { AccountsService } from './account/accounts.service';
import { AccountsController } from './account/accounts.controller';
import { CollectionsController } from './collection/collections.controller';
import { CollectionsService } from './collection/collections.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AccountsController, CollectionsController],
  providers: [AccountsService, CollectionsService],
})
export class AppModule { }
