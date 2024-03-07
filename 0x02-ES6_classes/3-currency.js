export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = name;
  }

  get code() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._code;
  }

  set code(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._code = val;
  }

  get name() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._name;
  }

  set name(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = val;
  }

  displayFullCurrency() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
