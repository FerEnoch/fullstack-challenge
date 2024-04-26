import { Injectable } from '@nestjs/common';
import { baseAccountsURL, getOptions } from 'src/config';


@Injectable()
export class AccountsService {

  async getAccount(account: string) {
    return fetch(`${baseAccountsURL}/${account}`, getOptions('GET'))
  }
}
