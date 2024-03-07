import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._floors = floors;
  }

  get floors() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._floors;
  }

  set floors(val) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._floors = val;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
