export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an Array');
    }
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._students = students;
  }

  get name() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = val;
  }

  get length() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._name;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a Number');
    }
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = val;
  }

  get students() {
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    return this._name;
  }

  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an Array');
    }
    // eslint-disable-next-line guard-for-in, no-underscore-dangle
    this._name = val;
  }
}
