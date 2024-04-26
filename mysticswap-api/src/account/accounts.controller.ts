import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('account')
export class AccountsController {
  constructor(private readonly openSeaService: AccountsService) { }

  @Get('/:account')
  async getAccount(@Param('account') account: string) {
    const response = await this.openSeaService.getAccount(account);
    if (!response.ok) throw new Error(`Error getting account ${account}`)
    return response.json();
  }
}
