/* eslint-disable no-unused-vars */
import Currency from './3-currency';
/* eslint-disable no-unused-vars */

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  /* eslint-disable no-undef */
  set amount(value) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = currency;
  }
  /* eslint-disable no-undef */

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
