export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._color = color;
  }

  cloneCar() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle, new-cap
    const descriptors = Object.getOwnPropertyDescriptors(this);
    const symbols = Object.getOwnPropertySymbols(this);
    const cloned = Object.create(Object.getPrototypeOf(this), descriptors);
    symbols.forEach((sym) => {
      cloned[sym] = this[sym];
    });
    return cloned;
  }
}
