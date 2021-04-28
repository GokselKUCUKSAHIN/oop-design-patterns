import {Factory} from "../account3/factory";
import {Customer} from "../domain/customer";
import {Account} from "../domain/account";

class AccountPrototypes {
  // Normal account
  static normalPrototype = new Account("1", 0, 1000, null, true, true, true);

  // Negative account
  static negativePrototype = new Account("1", 0, 1000, null, true, true, false);

  // Frozen account
  static frozenPrototype = new Account("1", -1000, 1000, null, false, false, false);
}

export class AccountFactory implements Factory {


  createFrozenAccount(owner: Customer, balance: number): Account {
    const account = AccountPrototypes.frozenPrototype.clone();
    account.owner = owner;
    account.balance = balance;
    return account;
  }

  createNegativeAccount(owner: Customer, balance: number): Account {
    const account = AccountPrototypes.negativePrototype.clone();
    account.owner = owner;
    account.balance = balance;
    return account;
  }

  createNormalAccount(owner: Customer, balance: number): Account {
    const account = AccountPrototypes.normalPrototype.clone();
    account.owner = owner;
    account.balance = balance;
    return account;
  }
}