export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._code = code;
  }

  toString() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return `[object ${this._code}]`;
  }
}
