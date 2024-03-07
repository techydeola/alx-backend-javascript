export default class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._amount = amount;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._amount;
  }

  set amount(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._amount = val;
  }

  get currency() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._currency;
  }

  set currency(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._currency = val;
  }

  displayFullPrice() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
