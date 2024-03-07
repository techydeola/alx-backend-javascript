export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._sqft;
  }

  set sqft(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._sqft = val;
  }
}
